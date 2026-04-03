import { AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const GAPS = [
  "Students don't understand money",
  "They struggle with stress and decisions",
  "They lack discipline and consistency",
  "They are unprepared for real-world challenges",
] as const;

type WiseStudentProblemProps = {
  className?: string;
};

export function WiseStudentProblem({ className }: WiseStudentProblemProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-[#06080d] py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-problem-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-12 lg:items-start">
          <div className="relative mb-8 pl-5 lg:mb-0 lg:pl-6">
            <div
              className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-rose-400/80 via-rose-500/40 to-transparent"
              aria-hidden
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55">
              <AlertCircle className="h-3.5 w-3.5 text-rose-400/90" aria-hidden />
              Gap
            </div>
            <h2
              id="wisestudent-problem-heading"
              className="mt-5 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              The Problem
            </h2>
          </div>

          <div className="min-w-0">
            <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
              Today&apos;s students are growing up in a complex world.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/75 md:text-lg">
              But education still focuses only on academics.
            </p>
            <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-foreground/50">
              As a result:
            </p>
            <ul className="mt-4 grid gap-3">
              {GAPS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#0c111c] px-4 py-3 text-sm leading-relaxed text-foreground/80 md:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/80"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#080a10] p-6 md:p-8">
              <p className="text-base leading-relaxed text-foreground/78 md:text-[17px]">
                Marks don&apos;t measure these.
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/78 md:text-[17px]">
                And schools have no system to track or improve them.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
