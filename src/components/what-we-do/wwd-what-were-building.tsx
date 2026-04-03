import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const INTRO_TAIL_LINES = [
  "a system designed to prepare students for life,",
  "not just exams.",
] as const;

const FOCUS_AREAS = [
  "Real-world skills",
  "Daily actions and habits",
  "Continuous improvement",
  "Measurable growth",
] as const;

type WwdWhatWereBuildingProps = {
  className?: string;
};

export function WwdWhatWereBuilding({ className }: WwdWhatWereBuildingProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-building-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.14),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08),transparent_72%)]"
                aria-hidden
              />

              <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
                <div>
                  <h2
                    id="wwd-building-heading"
                    className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                  >
                    What We&apos;re Building
                  </h2>

                  <div className="mt-8 space-y-2 text-base leading-relaxed text-foreground/72 md:text-[17px]">
                    <p>
                      We are building{" "}
                      <span className="font-semibold text-accent">WiseStudent</span>
                      —
                    </p>
                    {INTRO_TAIL_LINES.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "rounded-2xl border border-white/[0.09] bg-[#0c111c] p-5 md:p-7",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_40px_-18px_rgba(79,142,247,0.16)]"
                  )}
                >
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                    It focuses on
                  </p>
                  <ul className="mt-6 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                    {FOCUS_AREAS.map((item, index) => (
                      <li
                        key={item}
                        className={cn(
                          "group flex flex-col gap-2 rounded-xl border border-white/[0.08] bg-[#080a10] px-4 py-3.5",
                          "shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]",
                          "transition-[border-color,box-shadow] duration-300",
                          "hover:border-accent/25 hover:shadow-[0_0_32px_-12px_rgba(79,142,247,0.25)]"
                        )}
                      >
                        <span className="font-heading text-[10px] font-semibold tabular-nums uppercase tracking-[0.2em] text-foreground/40">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-sm font-semibold leading-snug tracking-tight text-foreground/92 md:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
