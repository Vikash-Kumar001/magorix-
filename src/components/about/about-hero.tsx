import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const GAP_POINTS = [
  "How to handle money",
  "How to deal with stress",
  "How to make decisions",
  "How to build discipline",
  "How to live responsibly",
] as const;

type AboutHeroProps = {
  className?: string;
};

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="about-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(79,142,247,0.16),transparent_58%)]"
        aria-hidden
      />
      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          About
        </p>
        <h1
          id="about-hero-heading"
          className="mt-4 max-w-3xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-5xl"
        >
          We started with a simple{" "}
          <span className="text-accent">question</span>.
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/65 md:mt-8 md:text-lg">
          <p className="font-heading text-lg font-semibold leading-snug text-foreground md:text-xl">
            Why does education feel stuck while everything else moves fast?
          </p>
          <p>
            Because schools and real life are out of sync. Families live on
            phones, juggle finances, and communicate constantly but school
            systems weren&apos;t designed for that reality.
          </p>
          <p>
            This isn&apos;t just a tech gap. It&apos;s a design gap where trust,
            clarity, and workflows don&apos;t connect so every tool becomes just
            another tab.
          </p>
          <p>
            Magorix fixes that with simple, thoughtful products built for Indian
            classrooms—so people stop asking the same questions twice.
          </p>
        </div>

        <div className="mt-8 max-w-5xl md:mt-10">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="rounded-[1.35rem] border border-white/[0.06] bg-background/80 p-5 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:items-start">
                <div className="relative pl-5">
                  <span
                    className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-accent via-accent/50 to-accent/20"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    The gap
                  </p>
                  <p className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                    Why are students prepared for exams
                    <span className="mt-1 block text-accent">but not for life?</span>
                  </p>
                  <p className="mt-4 font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
                    Schools teach subjects.
                  </p>
                  <p className="mt-3 text-base font-medium text-foreground/78 md:text-lg">
                    But life demands much more:
                  </p>
                </div>

                <div>
                  <ol className="space-y-0">
                    {GAP_POINTS.map((label, i) => (
                      <li
                        key={label}
                        className={cn(
                          "flex gap-4 py-3.5 first:pt-0 last:pb-0",
                          i !== GAP_POINTS.length - 1 &&
                            "border-b border-white/[0.07]"
                        )}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] font-heading text-xs font-semibold text-accent">
                          {i + 1}
                        </span>
                        <span className="flex flex-1 items-center text-base font-medium leading-snug text-foreground/88 md:text-[17px]">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6 text-base leading-relaxed text-foreground/68 md:text-[17px]">
                <p>Somewhere along the way, education became incomplete.</p>
                <p className="mt-3 font-medium text-foreground/82">
                  That is the gap we are building for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
