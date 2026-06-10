import { proofStats, systemsMarquee } from "@/content/site";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

export function ProofStrip() {
  return (
    <div id="proof-strip" className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 divide-x divide-line border-x border-line">
        {proofStats.map((stat) => (
          <div key={stat.label} className="px-5 py-8 md:px-8">
            <p className="font-mono text-3xl md:text-4xl text-ink">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] font-mono text-stone leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-4">
        <Marquee items={systemsMarquee} />
      </div>
    </div>
  );
}
