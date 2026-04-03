import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const TRACKING = ["Actions", "Habits", "Decisions"] as const;

type WiseStudentDifferentProps = {
  className?: string;
};

export function WiseStudentDifferent({ className }: WiseStudentDifferentProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-different-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2
            id="wisestudent-different-heading"
            className="max-w-[22ch] font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            What Makes WiseStudent Different
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div
              className={cn(
                "rounded-2xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-8",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
              )}
            >
              <p className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Not content. A system.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/65 md:text-[17px]">
                Most platforms deliver lessons.
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-accent md:text-xl">
                WiseStudent builds capability.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col justify-between rounded-2xl border border-accent/25 bg-[linear-gradient(160deg,rgba(79,142,247,0.12),rgba(12,17,28,0.98))] p-6 md:p-8",
                "shadow-[0_0_50px_-20px_rgba(79,142,247,0.35)]"
              )}
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                  Real behavior tracking
                </h3>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground/50">
                  Growth is measured through:
                </p>
                <ul className="mt-4 grid gap-2">
                  {TRACKING.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#080a10]/80 px-3 py-2.5 text-sm font-medium text-foreground/85 md:text-base"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-foreground/55 md:text-base">
                  —not just tests.
                </p>
              </div>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-white/[0.09] bg-[#080a10] p-6 md:p-8",
                "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8"
              )}
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                  Continuous improvement
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-[17px]">
                  Students improve every week with feedback and direction.
                </p>
              </div>
              <div className="mt-8 border-t border-white/[0.08] pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                  Built for real schools
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-[17px]">
                  Designed to fit into actual school environments—without
                  creating extra burden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
