import {
  GraduationCap,
  School,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const FEATURES: Feature[] = [
  {
    title: "For Schools",
    description:
      "Go beyond academics and understand how students are actually growing.",
    Icon: School,
  },
  {
    title: "For Parents",
    description:
      "See your child's development beyond marks—skills, behavior, and readiness.",
    Icon: UsersRound,
  },
  {
    title: "For Students",
    description:
      "Build confidence, discipline, and the ability to face real-life challenges.",
    Icon: GraduationCap,
  },
];

function FeatureCard({ title, description, Icon }: Feature) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-7",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_32px_-14px_rgba(79,142,247,0.1)]",
        "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
        "hover:border-accent/35 hover:bg-[#0d121c]",
        "hover:shadow-[0_0_56px_-14px_rgba(79,142,247,0.32),0_0_0_1px_rgba(79,142,247,0.06)_inset]"
      )}
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent",
          "shadow-[0_0_22px_-8px_rgba(79,142,247,0.25)]",
          "transition-[border-color,background-color,color,box-shadow] duration-300",
          "group-hover:border-accent/25 group-hover:bg-accent/10",
          "group-hover:shadow-[0_0_28px_-4px_rgba(79,142,247,0.4)]"
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/62 md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

type FeatureCardsProps = {
  className?: string;
};

export function FeatureCards({ className }: FeatureCardsProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-5 md:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.12),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.06),transparent_70%)]"
                aria-hidden
              />
              <div className="relative mb-8 text-center md:mb-10">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                  Who it is for
                </p>
              </div>
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {FEATURES.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/[0.06] pt-10 text-center md:mt-12 md:pt-12">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Why it matters
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 text-left md:p-10">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.14),transparent_68%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.07),transparent_72%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl lg:max-w-[28ch]">
                  Marks alone don&apos;t define a student&apos;s future.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  Across schools, parents, and students, life readiness is what
                  turns education into real growth.
                </p>

                <div className="mt-10 md:mt-12">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                    Without life skills
                  </p>
                  <div className="relative mt-8 md:mt-10">
                    <div
                      className="absolute left-[15px] top-3 bottom-12 w-px bg-gradient-to-b from-accent/55 via-white/12 to-white/5 md:left-[19px]"
                      aria-hidden
                    />
                    <ol className="relative space-y-0">
                      {[
                        "Students struggle with money",
                        "They lack decision-making ability",
                        "They are unprepared for real-world challenges",
                      ].map((text, index) => (
                        <li
                          key={text}
                          className="relative flex gap-5 pb-8 pl-12 last:pb-0 md:gap-6 md:pl-14"
                        >
                          <span
                            className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#080a10] md:top-0 md:h-10 md:w-10 md:text-sm"
                            aria-hidden
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="min-w-0 flex-1 pt-0.5 font-heading text-base font-semibold leading-snug tracking-tight text-foreground/92 md:text-lg">
                            {text}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="relative mt-10 border-t border-white/[0.08] pt-8 md:mt-12 md:pt-10">
                  <div className="rounded-2xl border border-accent/20 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),rgba(255,255,255,0.02))] px-5 py-5 md:px-7 md:py-6">
                    <p className="font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                      Education becomes incomplete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-8 text-center md:mt-10 md:pt-10">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            The solution
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.24)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 text-left md:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.16),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08),transparent_72%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl">
                  Introducing WiseStudent
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  A life-readiness platform designed to prepare students for
                  life—not just exams.
                </p>

                <div className="mt-10 md:mt-12">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                    WiseStudent helps students
                  </p>
                  <div className="relative mt-8 md:mt-10">
                    <div
                      className="absolute left-[15px] top-3 bottom-14 w-px bg-gradient-to-b from-accent/55 via-white/12 to-white/5 md:left-[19px]"
                      aria-hidden
                    />
                    <ol className="relative space-y-0">
                      {[
                        "Learn real-world skills",
                        "Apply them in daily life",
                        "Track their actions",
                        "Improve continuously",
                      ].map((text, index) => (
                        <li
                          key={text}
                          className="relative flex gap-5 pb-8 pl-12 last:pb-0 md:gap-6 md:pl-14"
                        >
                          <span
                            className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#080a10] md:top-0 md:h-10 md:w-10 md:text-sm"
                            aria-hidden
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="min-w-0 flex-1 pt-0.5 font-heading text-base font-semibold leading-snug tracking-tight text-foreground/92 md:text-lg">
                            {text}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="relative mt-10 border-t border-white/[0.08] pt-8 md:mt-12 md:pt-10">
                  <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-stretch md:gap-6">
                    <div className="rounded-2xl border border-white/[0.08] bg-[#0c111c] px-5 py-6 md:px-7 md:py-7">
                      <p className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.75rem]">
                        Not just learning.
                      </p>
                    </div>
                    <div className="flex items-center rounded-2xl border border-accent/25 bg-[linear-gradient(135deg,rgba(79,142,247,0.12),rgba(255,255,255,0.03))] px-5 py-6 shadow-[0_0_40px_-16px_rgba(79,142,247,0.35)] md:px-7 md:py-7">
                      <p className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-accent md:text-[1.75rem]">
                        Real growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-8 text-center md:mt-10 md:pt-10">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            How it works
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 text-left md:p-10">
              <div
                className="pointer-events-none absolute -left-10 top-1/3 h-48 w-48 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.1),transparent_70%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.12),transparent_68%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="max-w-[22ch] font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl">
                  A simple system that drives real change:
                </h2>

                <div className="mt-8 md:mt-10">
                  <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2 lg:gap-3">
                    {(
                      [
                        "Learn",
                        "Act",
                        "Track",
                        "Improve",
                      ] as const
                    ).map((step, index) => (
                      <div key={step} className="contents md:contents">
                        <div className="relative flex min-h-[5.25rem] flex-1 flex-col justify-center rounded-2xl border border-white/[0.09] bg-[#0c111c] px-4 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_36px_-16px_rgba(79,142,247,0.14)] md:min-h-0 md:px-5 md:py-6">
                          <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/42">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-2 font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                            {step}
                          </span>
                        </div>
                        {index < 3 && (
                          <div
                            className="flex flex-none items-center justify-center py-0.5 md:min-w-[1.25rem] md:py-0 md:px-0.5"
                            aria-hidden
                          >
                            <span className="text-lg font-light text-accent md:text-xl">
                              <span className="md:hidden">↓</span>
                              <span className="hidden md:inline">→</span>
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-10 border-t border-white/[0.08] pt-8 md:mt-12 md:pt-10">
                  <div className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent)] p-6 text-center md:p-8">
                    <p className="text-base leading-relaxed text-foreground/68 md:text-lg">
                      Students don&apos;t just study.
                    </p>
                    <p className="mt-3 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                      They apply, reflect, and evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-8 text-center md:mt-10 md:pt-10">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Different from everything else
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.24)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 text-left md:p-10">
              <div
                className="pointer-events-none absolute -right-14 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.14),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 left-1/3 h-44 w-44 -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.07),transparent_72%)]"
                aria-hidden
              />
              <div className="relative">
                <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-stretch md:gap-6">
                  <div className="flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-[#0c111c] px-5 py-6 md:px-7 md:py-7">
                    <p className="font-heading text-xl font-semibold leading-snug tracking-tight text-foreground/88 md:text-2xl">
                      Most platforms deliver content.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center rounded-2xl border border-accent/25 bg-[linear-gradient(135deg,rgba(79,142,247,0.12),rgba(255,255,255,0.03))] px-5 py-6 shadow-[0_0_44px_-18px_rgba(79,142,247,0.38)] md:px-7 md:py-7">
                    <p className="font-heading text-xl font-semibold leading-snug tracking-tight text-accent md:text-2xl">
                      WiseStudent builds capability.
                    </p>
                  </div>
                </div>

                <div className="relative mt-10 border-t border-white/[0.08] pt-8 md:mt-12 md:pt-10">
                  <div className="relative mt-8 md:mt-10">
                    <div
                      className="absolute left-[15px] top-3 bottom-14 w-px bg-gradient-to-b from-accent/55 via-white/12 to-white/5 md:left-[19px]"
                      aria-hidden
                    />
                    <ol className="relative space-y-0">
                    {[
                      "Tracks real behavior",
                      "Measures actual growth",
                      "Improves students over time",
                      "Connects schools, parents, and students",
                    ].map((text, index) => (
                      <li
                        key={text}
                        className="relative flex gap-5 pb-8 pl-12 last:pb-0 md:gap-6 md:pl-14"
                      >
                        <span
                          className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-[#0c111c] font-heading text-xs font-semibold text-accent shadow-[0_0_0_4px_#080a10] md:top-0 md:h-10 md:w-10 md:text-sm"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="min-w-0 flex-1 pt-0.5 font-heading text-base font-semibold leading-snug tracking-tight text-foreground/92 md:text-lg">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-8 text-center md:mt-10 md:pt-10">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Built for India
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 text-left md:p-10">
              <div
                className="pointer-events-none absolute -left-8 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.11),transparent_68%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.1),transparent_65%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl">
                  Designed for Indian schools
                </h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 md:gap-6">
                  <div className="flex flex-col justify-between rounded-2xl border border-white/[0.09] bg-[#0c111c] px-5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_36px_-18px_rgba(79,142,247,0.12)] md:px-6 md:py-7">
                    <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                      Built for
                    </p>
                    <p className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                      Real classrooms
                    </p>
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl border border-accent/22 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.02))] px-5 py-6 shadow-[0_0_44px_-20px_rgba(79,142,247,0.35)] md:px-6 md:py-7">
                    <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                      Aligned with
                    </p>
                    <p className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                      Future-ready education
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
