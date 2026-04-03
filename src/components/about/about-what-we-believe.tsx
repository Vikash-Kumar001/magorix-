import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type AboutWhatWeBelieveProps = {
  className?: string;
};

export function AboutWhatWeBelieve({ className }: AboutWhatWeBelieveProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-what-we-believe-heading"
    >
      <Container>
        <h2
          id="about-what-we-believe-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          What We Believe
        </h2>

        <div className="mt-8 max-w-5xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),rgba(255,255,255,0.02))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.2)]">
            <div className="rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-12">
                <div className="flex shrink-0 flex-col gap-2">
                  <span className="font-heading text-5xl font-bold leading-none tabular-nums text-accent/35 md:text-6xl">
                    01
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/90">
                    Core belief
                  </p>
                </div>
                <div className="min-w-0 flex-1 border-t border-white/[0.08] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-12">
                  <p className="font-heading text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-foreground md:text-3xl lg:text-[2.35rem]">
                    If we can change how students grow,
                    <span className="mt-2 block text-accent">
                      we can change how society functions.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
