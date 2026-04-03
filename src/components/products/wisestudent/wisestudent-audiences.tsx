import { GraduationCap, School, UsersRound } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const BLOCKS = [
  {
    title: "What Schools Get",
    items: [
      "Visibility into real student development",
      "A system beyond academics",
      "Measurable growth in life skills",
      "Structured student improvement",
    ],
    Icon: School,
  },
  {
    title: "What Parents Get",
    items: [
      "Clear understanding of their child's growth",
      "Visibility beyond marks",
      "Confidence in their child's future",
    ],
    Icon: UsersRound,
  },
  {
    title: "What Students Get",
    items: [
      "Confidence in real-life situations",
      "Better decision-making ability",
      "Strong habits and discipline",
      "Preparation for the future",
    ],
    Icon: GraduationCap,
  },
] as const;

type WiseStudentAudiencesProps = {
  className?: string;
};

export function WiseStudentAudiences({ className }: WiseStudentAudiencesProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-[#06080d] py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-audiences-heading"
    >
      <Container>
        <h2
          id="wisestudent-audiences-heading"
          className="sr-only"
        >
          Outcomes for schools, parents, and students
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {BLOCKS.map(({ title, items, Icon }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col rounded-2xl border border-white/[0.08] bg-[#0c111c] p-6 md:p-7",
                "shadow-[0_0_40px_-16px_rgba(79,142,247,0.15)]",
                "transition-[border-color,box-shadow] duration-300",
                "hover:border-accent/25 hover:shadow-[0_0_48px_-14px_rgba(79,142,247,0.22)]"
              )}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent shadow-[0_0_20px_-8px_rgba(79,142,247,0.35)]">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75 md:text-[15px]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
