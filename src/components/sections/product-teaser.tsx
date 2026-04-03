import Link from "next/link";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductTeaserProps = {
  className?: string;
};

function MiniPreview({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl",
        "border border-white/[0.09] bg-[#0a0e16]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_40px_-16px_rgba(79,142,247,0.12)]"
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(79,142,247,0.16),transparent_60%)]" />
      <div className="absolute inset-3 flex flex-col rounded-lg border border-dashed border-white/[0.1] bg-white/[0.02] sm:inset-4">
        <div className="flex h-7 shrink-0 items-center gap-1 border-b border-white/[0.06] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <div className="h-1.5 w-2/3 max-w-[8rem] rounded bg-white/[0.07]" />
          <div className="h-1.5 w-full rounded bg-white/[0.05]" />
          <div className="mt-1 grid flex-1 grid-cols-3 gap-1">
            <div className="rounded bg-white/[0.04]" />
            <div className="rounded bg-white/[0.04]" />
            <div className="rounded bg-white/[0.04]" />
          </div>
        </div>
      </div>
      <p className="pointer-events-none absolute bottom-2 left-0 right-0 text-center font-heading text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/28">
        {label}
      </p>
    </div>
  );
}

export function ProductTeaser({ className }: ProductTeaserProps) {
  const featuredProducts = PRODUCTS.filter((product) => product.name !== "Inavora");

  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section lg:py-section-lg",
        className
      )}
      aria-labelledby="home-products-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45 md:text-left">
            Our Products
          </p>

          <div className="mt-6 rounded-3xl border border-accent/15 bg-[linear-gradient(135deg,rgba(79,142,247,0.1),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_60px_-32px_rgba(79,142,247,0.22)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] p-6 md:p-10">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.13),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.07),transparent_72%)]"
                aria-hidden
              />

              <div className="relative">
                <h2
                  id="home-products-heading"
                  className="max-w-[22ch] font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                >
                  Purpose-built platform for life-ready education
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/68 md:text-lg">
                  Wise Student is built to help learners develop real-world
                  capability, not just exam performance.
                </p>

                <div className="mt-10 border-t border-white/[0.08] pt-10 md:mt-12 md:pt-12">
                  <div className="grid grid-cols-1 gap-8 md:gap-10">
                    {featuredProducts.map((product) => (
                      <div
                        key={product.id}
                        className={cn(
                          "flex min-w-0 flex-col rounded-2xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-8",
                          "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_40px_-16px_rgba(79,142,247,0.14)]",
                          "transition-[border-color,box-shadow] duration-300",
                          "hover:border-accent/25 hover:shadow-[0_0_48px_-14px_rgba(79,142,247,0.22)]"
                        )}
                      >
                        <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                          {product.name}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-foreground/70 md:text-base">
                          {product.teaser}
                        </p>

                        <div className="mt-6">
                          <span
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.09] px-3 py-1.5 text-xs font-semibold text-accent",
                              "shadow-[0_0_24px_-8px_rgba(79,142,247,0.45)]"
                            )}
                          >
                            <span className="relative flex h-2 w-2" aria-hidden>
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-60" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            {product.status}
                          </span>
                        </div>

                        <MiniPreview label={product.name} />

                        <div className="mt-6">
                          {product.exploreExternal ? (
                            <a
                              href={product.exploreHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                buttonBaseClass,
                                buttonVariantClasses.primary,
                                "min-h-[48px] px-7 py-3 text-base font-semibold"
                              )}
                            >
                              {product.exploreLabel}
                            </a>
                          ) : (
                            <Link
                              href={product.exploreHref}
                              className={cn(
                                buttonBaseClass,
                                buttonVariantClasses.primary,
                                "inline-flex min-h-[48px] px-7 py-3 text-base font-semibold"
                              )}
                            >
                              {product.exploreLabel}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-foreground/45 md:mt-12">
            <Link
              href="/products"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              View all product details
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
