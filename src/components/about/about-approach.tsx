import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const GROWTH_SIGNALS = [
  "Daily actions",
  "Habits",
  "Decisions",
  "Consistency over time",
] as const;

const LOOP_STEPS = ["Learn", "Act", "Track", "Improve"] as const;

type AboutApproachProps = {
  className?: string;
};

export function AboutApproach({ className }: AboutApproachProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-approach-heading"
    >
      <Container>
        <h2
          id="about-approach-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Our Approach
        </h2>

        <div className="mt-8 max-w-5xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),rgba(255,255,255,0.02))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10]">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="border-b border-white/[0.07] p-6 md:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
                    Belief
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/88 md:text-xl">
                    We believe students don&apos;t grow through content alone.
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    They grow through
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {GROWTH_SIGNALS.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground/85"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative p-6 md:p-8 lg:col-span-7">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(79,142,247,0.14),transparent_55%)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                      WiseStudent is built around a simple idea:
                    </p>

                    <div
                      className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 md:gap-x-3"
                      aria-label="Learn, act, track, improve"
                    >
                      {LOOP_STEPS.map((step, i) => (
                        <span key={step} className="inline-flex items-center gap-2 md:gap-3">
                          {i > 0 && (
                            <span className="text-accent" aria-hidden>
                              →
                            </span>
                          )}
                          <span className="inline-flex min-h-[44px] min-w-[5rem] items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] px-4 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-foreground md:min-w-[5.5rem] md:text-base">
                            {step}
                          </span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent px-5 py-4 md:px-6 md:py-5">
                      <p className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        Not theory -{" "}
                        <span className="text-accent">Practice.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
