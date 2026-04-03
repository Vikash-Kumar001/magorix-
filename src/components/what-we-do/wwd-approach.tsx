import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const ROWS = [
  {
    title: "Life-first, not subject-first",
    lines: [
      "We focus on what students need in life—not just what is taught in classrooms.",
    ],
  },
  {
    title: "Behavior over theory",
    lines: [
      "Growth is measured through actions, habits, and decisions—not just content.",
    ],
  },
  {
    title: "Continuous improvement",
    lines: [
      "Students don't just learn once.",
      "They improve over time—with visibility and direction.",
    ],
  },
] as const;

type WwdApproachProps = {
  className?: string;
};

export function WwdApproach({ className }: WwdApproachProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-approach-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-10">
              <div
                className="pointer-events-none absolute -left-12 top-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.11),transparent_70%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -right-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.1),transparent_65%)]"
                aria-hidden
              />

              <div className="relative">
                <h2
                  id="wwd-approach-heading"
                  className="max-w-[22ch] font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                >
                  How we think about it differently.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
                  Three commitments that show up in what we build—and how it feels
                  in the field.
                </p>

                <div className="relative mt-10 border-t border-white/[0.08] pt-10 md:mt-12 md:pt-12">
                  <div className="relative mt-8 md:mt-10">
                    <div
                      className="absolute left-[15px] top-3 bottom-12 w-px bg-gradient-to-b from-accent/55 via-white/12 to-white/5 md:left-[19px]"
                      aria-hidden
                    />
                    <ol className="relative list-none">
                      {ROWS.map((row, index) => (
                        <li
                          key={row.title}
                          className="relative flex gap-5 pb-10 pl-12 last:pb-0 md:gap-7 md:pl-14 md:pb-12"
                        >
                          <span
                            className="absolute left-0 top-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#080a10] md:top-0 md:h-10 md:w-10 md:text-sm"
                            aria-hidden
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                              {row.title}
                            </h3>
                            <div className="mt-3 space-y-2 text-base leading-relaxed text-foreground/72 md:text-[17px]">
                              {row.lines.map((line, lineIndex) => (
                                <p key={lineIndex}>{line}</p>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
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
