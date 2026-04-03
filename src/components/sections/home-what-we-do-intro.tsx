import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const focusAreas = [
  "Financial awareness",
  "Mental strength",
  "Discipline and habits",
  "Decision-making ability",
  "Real-world readiness",
] as const;

type HomeWhatWeDoIntroProps = {
  className?: string;
};

export function HomeWhatWeDoIntro({ className }: HomeWhatWeDoIntroProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background pb-8 pt-section-sm md:pb-10 md:pt-section lg:pb-12",
        className
      )}
      aria-labelledby="home-what-we-do-heading"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            What we do
          </p>
          <h2
            id="home-what-we-do-heading"
            className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
          >
            We solve what education leaves behind.
          </h2>

          <div className="mt-8 text-left md:mt-10">
            <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-5 md:p-8">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.14),transparent_65%)]"
                  aria-hidden
                />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:items-start">
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                      Schools prepare students for exams.
                    </p>
                    <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                      But real life requires much more.
                    </p>
                    <p className="pt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent md:text-base">
                      We focus on what truly matters:
                    </p>
                  </div>

                  <ol className="space-y-0">
                    {focusAreas.map((item, i) => (
                      <li
                        key={item}
                        className={cn(
                          "flex gap-4 py-3.5 first:pt-0 last:pb-0",
                          i !== focusAreas.length - 1 &&
                            "border-b border-white/[0.07]"
                        )}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] font-heading text-xs font-semibold text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex flex-1 items-center text-sm font-medium leading-snug text-foreground/88 md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
