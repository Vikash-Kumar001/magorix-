import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  "Think clearly",
  "Act responsibly",
  "Make better decisions",
  "Handle real-life challenges",
] as const;

type AboutTimelineProps = {
  className?: string;
};

export function AboutTimeline({ className }: AboutTimelineProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-building-heading"
    >
      <Container>
        <h2
          id="about-building-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          What We Are Building
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/62 md:text-lg">
          Magorix is building WiseStudent, a life-readiness platform designed to
          help students grow beyond academics.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/62 md:text-lg">
          Not just as learners, but as individuals who can:
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-stretch">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0d14] p-6 md:p-8">
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(79,142,247,0.12),transparent_55%)]"
                aria-hidden
              />
              <ol className="relative space-y-0">
                {CAPABILITIES.map((line, i) => (
                  <li
                    key={line}
                    className={cn(
                      "flex gap-5 py-5 first:pt-0 last:pb-0 md:gap-6 md:py-6",
                      i !== CAPABILITIES.length - 1 &&
                        "border-b border-white/[0.07]"
                    )}
                  >
                    <span
                      className="font-heading text-3xl font-bold tabular-nums leading-none text-accent/35 md:text-4xl"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 pt-1 font-heading text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                      {line}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex lg:col-span-5">
            <div className="flex w-full flex-col justify-between rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.14] via-[#0c111c] to-[#080c14] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] md:p-8">
              <div>
                <p className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  WiseStudent
                </p>
                <p className="mt-6 font-heading text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[1.75rem]">
                  This is not another learning app.
                </p>
              </div>
              <p className="mt-8 border-t border-white/10 pt-6 text-base font-medium leading-relaxed text-accent md:text-lg">
                It is a system that focuses on real growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
