import { Fragment } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const LOOP = ["Learn", "Act", "Track", "Improve"] as const;

const STUDENT_STEPS = [
  "Learn real-life concepts",
  "Apply them in daily situations",
  "Track their actions",
  "See their progress",
  "Improve over time",
] as const;

type WiseStudentHowItWorksProps = {
  className?: string;
};

export function WiseStudentHowItWorks({ className }: WiseStudentHowItWorksProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-[#06080d] py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-how-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2
            id="wisestudent-how-heading"
            className="text-center font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-foreground/65 md:text-lg">
            WiseStudent follows a simple loop:
          </p>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-2 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-1 md:gap-2">
            {LOOP.map((step, index) => (
              <Fragment key={step}>
                <div
                  className={cn(
                    "rounded-xl border border-white/[0.1] bg-[#0c111c] px-5 py-3 text-center",
                    "shadow-[0_0_32px_-14px_rgba(79,142,247,0.2)]",
                    "sm:min-w-[5.5rem] sm:flex-1 sm:max-w-[8rem]"
                  )}
                >
                  <span className="font-heading text-sm font-semibold tracking-tight text-foreground md:text-base">
                    {step}
                  </span>
                </div>
                {index < LOOP.length - 1 && (
                  <span
                    className="hidden shrink-0 text-lg text-accent sm:inline"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          <div className="relative mx-auto mt-14 max-w-3xl md:mt-16">
            <div className="relative mt-8 md:mt-10">
              <div
                className="absolute left-[15px] top-3 bottom-12 w-px bg-gradient-to-b from-accent/55 via-white/12 to-white/5 md:left-[19px]"
                aria-hidden
              />
              <div className="mb-6 md:mb-8">
                <p className="pl-12 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-foreground/50 md:pl-14">
                  Students
                </p>
              </div>
              <ol className="relative list-none space-y-0">
                {STUDENT_STEPS.map((item, index) => (
                  <li
                    key={item}
                    className="relative flex gap-5 pb-8 pl-12 last:pb-0 md:gap-6 md:pl-14"
                  >
                    <span
                      className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#06080d] md:top-0 md:h-10 md:w-10 md:text-sm"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 flex-1 pt-0.5 text-base leading-relaxed text-foreground/78 md:text-[17px]">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
