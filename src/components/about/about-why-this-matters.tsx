import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const REALITIES = [
  { id: "01", label: "Reality 01", title: "Financially complex" },
  { id: "02", label: "Reality 02", title: "Digitally intense" },
  { id: "03", label: "Reality 03", title: "Mentally demanding" },
] as const;

type AboutWhyThisMattersProps = {
  className?: string;
};

export function AboutWhyThisMatters({
  className,
}: AboutWhyThisMattersProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-why-this-matters-heading"
    >
      <Container>
        <h2
          id="about-why-this-matters-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Why This Matters
        </h2>

        <div className="mt-8 max-w-5xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),rgba(255,255,255,0.02))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-8">
              <p className="max-w-3xl font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                Today&apos;s students are entering a world that is:
              </p>

              <div className="relative mt-8 md:mt-10">
                <div
                  className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-white/15 to-white/5 md:left-[19px]"
                  aria-hidden
                />
                <ol className="relative space-y-0">
                  {REALITIES.map((item, i) => (
                    <li
                      key={item.id}
                      className={cn(
                        "relative flex gap-5 pb-8 pl-12 last:pb-0 md:gap-6 md:pl-14",
                        i === REALITIES.length - 1 && "pb-0"
                      )}
                    >
                      <span
                        className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#080a10] md:top-0.5 md:h-10 md:w-10 md:text-sm"
                        aria-hidden
                      >
                        {item.id}
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          {item.label}
                        </p>
                        <p className="mt-2 font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                          {item.title}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-8 md:mt-10 md:pt-10">
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/72 md:text-lg">
                    Without the right skills, they struggle no matter how well
                    they score in exams.
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-5 py-4 md:shrink-0 md:px-6 md:py-5">
                    <p className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      Education must -{" "}
                      <span className="text-accent">evolve.</span>
                    </p>
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
