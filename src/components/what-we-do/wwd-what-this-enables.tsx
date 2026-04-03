import {
  GraduationCap,
  School,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const AUDIENCES: {
  label: string;
  items: readonly [string, string];
  Icon: LucideIcon;
}[] = [
  {
    label: "For Schools",
    items: [
      "Understand real student development",
      "Go beyond academics",
    ],
    Icon: School,
  },
  {
    label: "For Parents",
    items: [
      "See how their child is truly growing",
      "Stay meaningfully involved",
    ],
    Icon: UsersRound,
  },
  {
    label: "For Students",
    items: [
      "Build confidence, discipline, and real-world skills",
      "Become capable individuals",
    ],
    Icon: GraduationCap,
  },
];

type WwdWhatThisEnablesProps = {
  className?: string;
};

export function WwdWhatThisEnables({ className }: WwdWhatThisEnablesProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-enables-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-8 lg:p-10">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.13),transparent_62%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.08),transparent_72%)]"
                aria-hidden
              />

              <div className="relative">
                <h2
                  id="wwd-enables-heading"
                  className="font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                >
                  What This Enables
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:gap-6 lg:grid-cols-3">
                  {AUDIENCES.map(({ label, items, Icon }) => (
                    <div
                      key={label}
                      className={cn(
                        "group flex flex-col gap-5 rounded-2xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-7",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_36px_-16px_rgba(79,142,247,0.12)]",
                        "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
                        "hover:border-accent/30 hover:bg-[#0d121c]",
                        "hover:shadow-[0_0_48px_-14px_rgba(79,142,247,0.28),0_0_0_1px_rgba(79,142,247,0.05)_inset]"
                      )}
                    >
                      <div
                        className={cn(
                          "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent",
                          "shadow-[0_0_22px_-8px_rgba(79,142,247,0.25)]",
                          "transition-[border-color,background-color,box-shadow] duration-300",
                          "group-hover:border-accent/25 group-hover:bg-accent/10",
                          "group-hover:shadow-[0_0_28px_-4px_rgba(79,142,247,0.4)]"
                        )}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                          {label}
                        </h3>
                        <ul className="mt-5 grid list-none gap-3">
                          {items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/78 md:text-[15px]"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
