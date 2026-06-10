/**
 * Static SVG rendition of "The New Hire" scene — shown before the canvas
 * mounts, and permanently on mobile / reduced-motion. Pure vector: zero
 * network weight, zero layout shift.
 */
export function HeroFallback() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Abstract sculpture of five porcelain forms with one orange sphere joining them"
    >
      <defs>
        <radialGradient id="ml-soft" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ece6d9" />
        </radialGradient>
        <radialGradient id="ml-accent" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#f97443" />
          <stop offset="100%" stopColor="#cf4413" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="330" rx="130" ry="18" fill="#16130e" opacity="0.08" />
      {/* torus */}
      <circle cx="120" cy="160" r="46" fill="none" stroke="url(#ml-soft)" strokeWidth="26" />
      {/* capsules */}
      <rect x="262" y="110" width="40" height="86" rx="20" fill="url(#ml-soft)" transform="rotate(24 282 153)" />
      <rect x="240" y="240" width="34" height="70" rx="17" fill="url(#ml-soft)" transform="rotate(-32 257 275)" />
      {/* core sphere */}
      <circle cx="196" cy="208" r="62" fill="url(#ml-soft)" />
      {/* the new hire */}
      <circle cx="120" cy="268" r="27" fill="url(#ml-accent)" />
      <circle cx="111" cy="259" r="8" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}
