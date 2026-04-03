import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    title: "Real student growth is not measured",
    lines: [
      "Marks show academic performance—",
      "but not life skills, behavior, or readiness.",
      "Schools have no system to track this.",
    ],
  },
  {
    title: "Parents see marks, not development",
    lines: [
      "They receive report cards—",
      "but don't understand how their child is actually growing.",
    ],
  },
  {
    title: "Students don't connect learning to life",
    lines: [
      "What they learn feels disconnected from reality.",
      "So engagement drops.",
    ],
  },
] as const;

type WwdProblemsProps = {
  className?: string;
};

export function WwdProblems({ className }: WwdProblemsProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-problems-heading"
    >
      <Container>
        <h2
          id="wwd-problems-heading"
          className="max-w-2xl font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Problems we obsess over
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Three gaps we see in almost every institution we talk to.
        </p>

        <ol className="mt-10 max-w-3xl space-y-10 md:mt-12 md:space-y-12">
          {PROBLEMS.map((item, index) => (
            <li key={item.title} className="flex gap-5 md:gap-8">
              <span
                className="shrink-0 pt-0.5 font-heading text-3xl font-bold tabular-nums leading-none text-accent/35 md:text-4xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-2 text-base leading-relaxed text-foreground/72 md:text-[17px]">
                  {item.lines.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
