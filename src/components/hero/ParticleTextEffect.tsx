"use client";

import { useEffect, useRef } from "react";

interface Vector2D {
  x: number;
  y: number;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

/** Page background — trails and killed particles dissolve into this. */
const CREAM: Rgb = { r: 250, g: 247, b: 241 };

/** Brand palette the messages cycle through (ink-heavy, persimmon as accent). */
const WORD_COLORS: Rgb[] = [
  { r: 22, g: 19, b: 14 }, // ink
  { r: 232, g: 80, b: 26 }, // persimmon
  { r: 22, g: 19, b: 14 }, // ink
  { r: 196, g: 62, b: 16 }, // deep persimmon
];

const FRAMES_PER_WORD = 240; // ~4s per message at 60fps

function generateRandomPos(cx: number, cy: number, mag: number, w: number, h: number): Vector2D {
  const randomX = Math.random() * w;
  const randomY = Math.random() * h;

  const direction = { x: randomX - cx, y: randomY - cy };
  const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
  if (magnitude > 0) {
    direction.x = (direction.x / magnitude) * mag;
    direction.y = (direction.y / magnitude) * mag;
  }

  return { x: cx + direction.x, y: cy + direction.y };
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 100;
  maxSpeed = 1.0;
  maxForce = 0.1;
  particleSize = 10;
  isKilled = false;

  startColor: Rgb = { ...CREAM };
  targetColor: Rgb = { ...CREAM };
  colorWeight = 0;
  colorBlendRate = 0.01;

  move() {
    let proximityMult = 1;
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2),
    );
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };
    const magnitude = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y,
    );
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };
    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  currentColor(): Rgb {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }
    return {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const c = this.currentColor();
    ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  /** Send the particle off-canvas, fading back into the page background. */
  kill(w: number, h: number) {
    if (this.isKilled) return;
    const randomPos = generateRandomPos(w / 2, h / 2, (w + h) / 2, w, h);
    this.target.x = randomPos.x;
    this.target.y = randomPos.y;

    this.startColor = this.currentColor();
    this.targetColor = { ...CREAM };
    this.colorWeight = 0;
    this.isKilled = true;
  }
}

/** Resolve the Fraunces family injected by next/font. */
function displayFamily(): string {
  const family =
    getComputedStyle(document.documentElement).getPropertyValue("--font-fraunces").trim() ||
    "Georgia";
  return `${family}, Georgia, serif`;
}

/** Fit the message to the canvas: start large, shrink until it fits. */
function fitFont(ctx: CanvasRenderingContext2D, word: string, w: number, h: number): string {
  const family = displayFamily();
  let size = Math.round(h * 0.32);
  do {
    ctx.font = `600 ${size}px ${family}`;
    if (ctx.measureText(word).width <= w * 0.9) break;
    size -= 4;
  } while (size > 28);
  return ctx.font;
}

export function ParticleTextEffect({
  words,
  className,
  textYRatio = 0.5,
}: {
  words: string[];
  className?: string;
  /** Vertical center of the formed text, as a fraction of canvas height. */
  textYRatio?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || words.length === 0) return;

    const ctx = canvas.getContext("2d")!;
    let W = 0;
    let H = 0;

    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      W = Math.max(300, Math.round(rect.width));
      H = Math.max(180, Math.round(rect.height));
      canvas.width = W;
      canvas.height = H;
    };
    sizeCanvas();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Static render: first message, no simulation.
      const c = WORD_COLORS[0];
      ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
      ctx.font = fitFont(ctx, words[0], W, H);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(words[0], W / 2, H * textYRatio);
      return;
    }

    const particles: Particle[] = [];
    let frameCount = 0;
    let wordIndex = 0;
    let raf = 0;
    let running = false;
    const mouse = { x: 0, y: 0, isPressed: false, isRightClick: false };

    const nextWord = (word: string, color: Rgb) => {
      // Coarser sampling on narrow canvases keeps the simulation cheap.
      const pixelSteps = W < 700 ? 7 : 6;

      const offscreen = document.createElement("canvas");
      offscreen.width = W;
      offscreen.height = H;
      const offCtx = offscreen.getContext("2d")!;

      offCtx.fillStyle = "white";
      offCtx.font = fitFont(offCtx, word, W, H);
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(word, W / 2, H * textYRatio);

      const pixels = offCtx.getImageData(0, 0, W, H).data;

      let particleIndex = 0;
      const coordsIndexes: number[] = [];
      for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
        coordsIndexes.push(i);
      }
      // Shuffle so the message assembles fluidly instead of scanline by scanline.
      for (let i = coordsIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]];
      }

      for (const pixelIndex of coordsIndexes) {
        if (pixels[pixelIndex + 3] > 0) {
          const x = (pixelIndex / 4) % W;
          const y = Math.floor(pixelIndex / 4 / W);

          let particle: Particle;
          if (particleIndex < particles.length) {
            particle = particles[particleIndex];
            particle.isKilled = false;
            particleIndex++;
          } else {
            particle = new Particle();
            const randomPos = generateRandomPos(W / 2, H / 2, (W + H) / 2, W, H);
            particle.pos.x = randomPos.x;
            particle.pos.y = randomPos.y;
            particle.maxSpeed = Math.random() * 6 + 4;
            particle.maxForce = particle.maxSpeed * 0.05;
            particle.particleSize = Math.random() * 6 + 6;
            particle.colorBlendRate = Math.random() * 0.0275 + 0.0025;
            particles.push(particle);
          }

          particle.startColor = particle.currentColor();
          particle.targetColor = color;
          particle.colorWeight = 0;
          particle.target.x = x;
          particle.target.y = y;
        }
      }

      for (let i = particleIndex; i < particles.length; i++) {
        particles[i].kill(W, H);
      }
    };

    const animate = () => {
      if (!running) return;

      // Motion-blur trail in the page background color — the canvas stays
      // visually seamless against the cream page, no visible frame.
      ctx.fillStyle = `rgba(${CREAM.r}, ${CREAM.g}, ${CREAM.b}, 0.12)`;
      ctx.fillRect(0, 0, W, H);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.move();
        particle.draw(ctx);
        if (
          particle.isKilled &&
          (particle.pos.x < 0 || particle.pos.x > W || particle.pos.y < 0 || particle.pos.y > H)
        ) {
          particles.splice(i, 1);
        }
      }

      // Right-click drag scatters particles — a quiet easter egg.
      if (mouse.isPressed && mouse.isRightClick) {
        particles.forEach((particle) => {
          const distance = Math.sqrt(
            Math.pow(particle.pos.x - mouse.x, 2) + Math.pow(particle.pos.y - mouse.y, 2),
          );
          if (distance < 50) particle.kill(W, H);
        });
      }

      frameCount++;
      if (frameCount % FRAMES_PER_WORD === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        nextWord(words[wordIndex], WORD_COLORS[wordIndex % WORD_COLORS.length]);
      }

      raf = requestAnimationFrame(animate);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(animate);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    nextWord(words[0], WORD_COLORS[0]);

    // Only simulate while the hero is on screen.
    const observer = new IntersectionObserver(
      (entries) => (entries.some((e) => e.isIntersecting) ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(canvas);

    // Re-fit when the layout changes meaningfully (e.g. orientation flip).
    let resizeTimer = 0;
    const resizeObserver = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      if (Math.abs(rect.width - W) < 40 && Math.abs(rect.height - H) < 40) return;
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        sizeCanvas();
        nextWord(words[wordIndex], WORD_COLORS[wordIndex % WORD_COLORS.length]);
      }, 150);
    });
    resizeObserver.observe(canvas);

    const toCanvasCoords = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * W;
      mouse.y = ((e.clientY - rect.top) / rect.height) * H;
    };
    const handleMouseDown = (e: MouseEvent) => {
      mouse.isPressed = true;
      mouse.isRightClick = e.button === 2;
      toCanvasCoords(e);
    };
    const handleMouseUp = () => {
      mouse.isPressed = false;
      mouse.isRightClick = false;
    };
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", toCanvasCoords);
    canvas.addEventListener("contextmenu", handleContextMenu);

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      window.clearTimeout(resizeTimer);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", toCanvasCoords);
      canvas.removeEventListener("contextmenu", handleContextMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join("|")]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
