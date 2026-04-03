import { Globe2, Sparkles, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const CHALLENGE_AREAS = [
  "Financial awareness",
  "Mental resilience",
  "Decision-making",
  "Real-world readiness",
] as const;

type CareersWhyJoinProps = {
  className?: string;
};

export function CareersWhyJoin({ className }: CareersWhyJoinProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-[#06080d] py-section-sm md:py-section",
        className
      )}
      aria-labelledby="careers-why-join-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2
            id="careers-why-join-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Why Join Magorix
          </h2>

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8">
            <div
              className={cn(
                "rounded-2xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-8",
                "shadow-[0_0_40px_-18px_rgba(79,142,247,0.12)]"
              )}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground md:text-xl">
                High ownership from day one
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/70 md:text-[17px]">
                Own outcomes end-to-end—from idea to execution.
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground/60 md:text-[17px]">
                No unnecessary layers. No waiting.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-accent/25 bg-[linear-gradient(155deg,rgba(79,142,247,0.12),rgba(12,17,28,0.98))] p-6 md:p-8",
                "shadow-[0_0_50px_-22px_rgba(79,142,247,0.35)] lg:row-span-2"
              )}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Target className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground md:text-xl">
                Work on real problems
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/75 md:text-[17px]">
                Students today are not prepared for real life.
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                You&apos;ll work on challenges around:
              </p>
              <ul className="mt-4 grid gap-2.5">
                {CHALLENGE_AREAS.map((item) => (
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
              <p className="mt-6 border-t border-white/[0.08] pt-6 text-base font-medium leading-relaxed text-foreground/80">
                Your work directly impacts how students grow.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-8",
                "shadow-[0_0_40px_-18px_rgba(79,142,247,0.12)]"
              )}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent">
                <Users className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground md:text-xl">
                Build with a focused team
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/70 md:text-[17px]">
                Small team. High responsibility. Real impact.
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/65 md:text-[17px]">
                Your growth is directly tied to what we build together.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "mt-6 rounded-2xl border border-white/[0.08] bg-[#080a10] p-6 md:mt-8 md:flex md:items-center md:justify-between md:gap-10 md:p-8",
              "lg:px-10"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-2xl">
                <Globe2 className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                  Shape education in India{" "}
                  <span className="whitespace-nowrap" aria-hidden>
                    🇮🇳
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/68 md:text-[17px]">
                  Everything we build is grounded in real Indian classrooms—their
                  realities, constraints, and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
