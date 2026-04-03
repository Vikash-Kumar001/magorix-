import { Fragment } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PILLARS = ["Measurable", "Visible", "Improvable"] as const;

type WwdOurGoalProps = {
  className?: string;
};

export function WwdOurGoal({ className }: WwdOurGoalProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-our-goal-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-10">
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(79,142,247,0.12),transparent_70%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08),transparent_72%)]"
                aria-hidden
              />

              <div className="relative text-center">
                <h2
                  id="wwd-our-goal-heading"
                  className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                >
                  Our Goal
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  To make life-readiness:
                </p>

                <div className="mx-auto mt-8 flex max-w-3xl flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-2 md:gap-3">
                  {PILLARS.map((word, index) => (
                    <Fragment key={word}>
                      <div
                        className={cn(
                          "rounded-2xl border border-white/[0.1] bg-[#0c111c] px-5 py-4",
                          "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_36px_-14px_rgba(79,142,247,0.18)]",
                          "sm:min-w-0 sm:flex-1 sm:max-w-[14rem] sm:py-5"
                        )}
                      >
                        <p className="font-heading text-lg font-semibold tracking-tight text-accent md:text-xl">
                          {word}.
                        </p>
                      </div>
                      {index < PILLARS.length - 1 && (
                        <span
                          className="hidden shrink-0 self-center text-xl font-light text-accent/55 sm:inline"
                          aria-hidden
                        >
                          ·
                        </span>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
