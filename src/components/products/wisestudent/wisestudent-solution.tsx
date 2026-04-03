import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const HELPS = [
  "Build financial awareness",
  "Improve mental resilience",
  "Develop discipline and habits",
  "Strengthen decision-making",
  "Prepare for real-life situations",
] as const;

type WiseStudentSolutionProps = {
  className?: string;
};

export function WiseStudentSolution({ className }: WiseStudentSolutionProps) {
  return (
    <section
      id="docs"
      className={cn(
        "scroll-mt-24 border-b border-white/[0.06] bg-background py-section-sm md:py-section md:scroll-mt-28",
        className
      )}
      aria-labelledby="wisestudent-solution-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.12),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.25)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-10">
              <div
                className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.14),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08),transparent_70%)]"
                aria-hidden
              />

              <div className="relative">
                <h2
                  id="wisestudent-solution-heading"
                  className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                >
                  The Solution
                </h2>
                <p className="mt-6 max-w-3xl font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                  WiseStudent is a life-readiness platform designed to help
                  students grow beyond academics.
                </p>
                <p className="mt-6 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                  It helps students:
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {HELPS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#0c111c] px-4 py-3.5 text-sm font-medium text-foreground/88 md:text-[15px]"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/[0.08] pt-8 md:mt-12 md:pt-10">
                  <p className="text-base italic leading-relaxed text-foreground/65 md:text-lg">
                    This is not a one-time program.
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold text-foreground md:text-xl">
                    It is a continuous growth system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
