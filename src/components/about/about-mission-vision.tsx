import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const VISION_POINTS = [
  "Financial awareness",
  "Emotional strength",
  "Strong values",
  "Real-world readiness",
] as const;

type AboutMissionVisionProps = {
  className?: string;
};

export function AboutMissionVision({ className }: AboutMissionVisionProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-mission-heading"
    >
      <Container>
        <div className="max-w-5xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),rgba(255,255,255,0.02))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10]">
              <div className="grid md:grid-cols-2">
                <article className="border-b border-white/[0.07] p-6 md:border-b-0 md:border-r md:border-white/[0.07] md:p-8">
                  <h2
                    id="about-mission-heading"
                    className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-accent/85"
                  >
                    Our Mission
                  </h2>
                  <p className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.75rem] lg:text-[2rem]">
                    To prepare students for life before life tests them.
                  </p>
                </article>

                <article className="p-6 md:p-8">
                  <h2
                    id="about-vision-heading"
                    className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45"
                  >
                    Our Vision
                  </h2>
                  <p className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground md:text-xl">
                    A future where every student grows up with:
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {VISION_POINTS.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-base leading-snug text-foreground/85 md:text-[17px]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-white/[0.08] pt-5 text-sm font-medium leading-relaxed text-foreground/65 md:text-base">
                    - not by chance, but by design.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
