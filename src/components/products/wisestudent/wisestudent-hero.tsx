import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type WiseStudentHeroProps = {
  className?: string;
};

export function WiseStudentHero({ className }: WiseStudentHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="wisestudent-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-25%,rgba(79,142,247,0.22),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.12),transparent_65%)]"
        aria-hidden
      />

      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Magorix product
        </p>
        <h1
          id="wisestudent-hero-heading"
          className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground md:mt-6 md:text-5xl lg:text-6xl"
        >
          WiseStudent
          <span className="mt-4 block max-w-3xl text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground/75 md:mt-5 md:text-2xl lg:text-[1.65rem]">
            Preparing students for life—before life tests them.
          </span>
        </h1>

        <div className="mt-10 grid max-w-5xl gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          <div
            className={cn(
              "rounded-2xl border border-white/[0.1] bg-[#0c111c] p-6 md:p-8",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
            )}
          >
            <p className="font-heading text-lg font-semibold leading-snug text-foreground/88 md:text-xl">
              Schools prepare students for exams.
            </p>
          </div>
          <div
            className={cn(
              "rounded-2xl border border-accent/30 bg-[linear-gradient(145deg,rgba(79,142,247,0.14),rgba(12,17,28,0.95))] p-6 md:p-8",
              "shadow-[0_0_60px_-24px_rgba(79,142,247,0.45),0_0_0_1px_rgba(79,142,247,0.15)_inset]"
            )}
          >
            <p className="font-heading text-lg font-semibold leading-snug text-accent md:text-xl">
              WiseStudent prepares them for life.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
