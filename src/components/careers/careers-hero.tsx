import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CareersHeroProps = {
  className?: string;
};

export function CareersHero({ className }: CareersHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="careers-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-30%,rgba(79,142,247,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.1),transparent_65%)]"
        aria-hidden
      />

      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Careers
        </p>
        <h1
          id="careers-hero-heading"
          className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground md:mt-6 md:text-5xl lg:text-[3.25rem]"
        >
          Build something that matters.
        </h1>

        <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/72 md:mt-12 md:text-xl md:leading-relaxed">
          <p>We&apos;re not building another product.</p>
          <p className="font-medium text-foreground/88">
            We&apos;re building a system that prepares students for life.
          </p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/62 md:mt-10 md:text-lg">
          We are an early-stage team that moves fast, thinks deeply, and focuses
          on real impact.
        </p>

        <div className="mt-10 max-w-3xl rounded-2xl border border-accent/20 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(8,10,16,0.9))] p-6 md:mt-12 md:p-8">
          <p className="text-base leading-relaxed text-foreground/78 md:text-lg">
            If you want to work on meaningful problems—not just ship features—
            <span className="mt-2 block font-heading font-semibold text-foreground">
              you&apos;ll fit right in.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
