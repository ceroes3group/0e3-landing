import Link from "next/link";
import type { Metadata } from "next";
import {
  catalogPages,
  getWhatsAppHref,
  liveUrls,
  secondaryCatalogPages,
  site,
  statusStyles,
} from "@/lib/constants";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Productos — 0E3",
  description:
    "0E3 POS, Gastro y Aliados para comercios que trabajan todos los días.",
};

export default function AppsCatalogPage() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-background px-6 pb-24 pt-28">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            ← Volver al inicio
          </Link>
          <h1 className="mt-8 font-display text-4xl font-semibold text-white md:text-5xl">
            Productos 0E3
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            El producto principal es <strong className="text-white">0E3 POS</strong>.
            Los demás complementan rubros específicos o están en desarrollo.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {catalogPages.map((app) => (
              <article
                key={app.slug}
                className={cn(
                  "card-surface flex flex-col rounded-[1.5rem] p-6",
                  app.slug === "nexopos" && "md:col-span-2 ring-1 ring-primary/20",
                )}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {app.name}
                  </h2>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-3 py-1 text-xs font-medium ring-1",
                      statusStyles[app.status],
                    )}
                  >
                    {app.status}
                  </span>
                </div>
                <p className="text-sm leading-7 text-muted">{app.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={app.internalPath}
                    className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-primary/10 hover:ring-primary/20"
                  >
                    Ver más
                  </Link>
                  {app.slug === "nexopos" ? (
                    <a
                      href={liveUrls.posSignup}
                      className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]"
                    >
                      Probar 0E3 POS
                    </a>
                  ) : (
                    <a
                      href={app.primaryCta.href}
                      className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10"
                    >
                      {app.primaryCta.label}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {secondaryCatalogPages.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-display text-xl font-semibold text-white">
                Otros productos
              </h2>
              <p className="mt-2 text-sm text-muted">
                Apps en desarrollo, separadas de la línea comercial principal.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {secondaryCatalogPages.map((app) => (
                  <article
                    key={app.slug}
                    className="card-surface rounded-[1.5rem] p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-white">
                      {app.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{app.tagline}</p>
                    <Link
                      href={app.internalPath}
                      className="mt-4 inline-block text-sm text-accent"
                    >
                      Ver más →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-16 card-surface rounded-2xl p-6">
            <p className="text-sm text-muted">
              ¿No sabés qué plan necesitás?{" "}
              <Link href="/precios/" className="text-accent hover:underline">
                Compará planes
              </Link>{" "}
              o{" "}
              <a
                href={
                  getWhatsAppHref() ||
                  `mailto:${site.email}?subject=Consulta%200E3`
                }
                className="text-accent hover:underline"
              >
                escribinos
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
