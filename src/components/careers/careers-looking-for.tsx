import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const TRAITS = [
  "Take ownership without being asked",
  "Care about impact, not just output",
  "Think long-term",
  "Can move fast with clarity",
] as const;

type CareersLookingForProps = {
  className?: string;
};

export function CareersLookingFor({ className }: CareersLookingForProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="careers-looking-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] px-6 py-10 md:px-10 md:py-12">
              <div
                className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.12),transparent_70%)]"
                aria-hidden
              />

              <div className="relative lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
                <div>
                  <h2
                    id="careers-looking-heading"
                    className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                  >
                    Who We&apos;re Looking For
                  </h2>
                  <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
                    People who:
                  </p>
                </div>
                <ul className="mt-8 grid list-none gap-4 lg:mt-0">
                  {TRAITS.map((trait, index) => (
                    <li
                      key={trait}
                      className="flex gap-4 rounded-xl border border-white/[0.08] bg-[#0c111c] px-4 py-3.5 md:px-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-heading text-xs font-semibold text-accent"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-0.5 text-base leading-relaxed text-foreground/82 md:text-[17px]">
                        {trait}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
