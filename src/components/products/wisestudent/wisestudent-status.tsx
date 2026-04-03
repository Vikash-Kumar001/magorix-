import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type WiseStudentStatusProps = {
  className?: string;
};

export function WiseStudentStatus({ className }: WiseStudentStatusProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-status-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2
            id="wisestudent-status-heading"
            className="sr-only"
          >
            Current status
          </h2>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent",
              "shadow-[0_0_28px_-4px_rgba(79,142,247,0.4)]"
            )}
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Private Beta
          </span>
          <p className="mt-6 text-base leading-relaxed text-foreground/65 md:text-lg">
            We are working with select schools to refine and scale WiseStudent.
          </p>
        </div>
      </Container>
    </section>
  );
}
