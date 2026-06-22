import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { AppPageEntry } from "@/lib/constants";
import { liveUrls, statusStyles } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

type AppProductPageProps = {
  app: AppPageEntry;
};

export function AppProductPage({ app }: AppProductPageProps) {
  const isAvailable = app.status === "Disponible";

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-background px-6 pb-24 pt-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/apps/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a productos
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium ring-1",
                statusStyles[app.status],
              )}
            >
              {app.status}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold text-white md:text-5xl">
            {app.name}
          </h1>
          <p className="mt-4 text-lg text-accent">{app.tagline}</p>
          <p className="mt-6 text-base leading-8 text-muted">{app.description}</p>

          <div className="mt-8 rounded-2xl border border-white/5 bg-surface/70 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Para quién
            </p>
            <p className="mt-2 text-sm leading-7 text-white">{app.forWho}</p>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">Qué podés hacer</p>
            <ul className="mt-4 space-y-3">
              {app.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/5 bg-surface/70 px-4 py-3 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {app.includes.length > 0 ? (
            <div className="mt-8">
              <p className="text-sm font-medium text-white">Qué incluye</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
                {app.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10 card-surface rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Empezar
            </p>
            {isAvailable ? (
              <p className="mt-3 text-sm leading-7 text-muted">
                Creá tu cuenta en minutos y probá el sistema con tu negocio.
                Si ya tenés usuario, podés ingresar desde el menú superior.
              </p>
            ) : (
              <p className="mt-3 text-sm leading-7 text-muted">
                Este producto aún no está abierto al público general. Escribinos
                y te contamos en qué etapa está y cómo sumarte.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={app.primaryCta.href}>{app.primaryCta.label}</Button>
              {app.secondaryCta ? (
                <Button href={app.secondaryCta.href} variant="secondary">
                  {app.secondaryCta.label}
                </Button>
              ) : null}
              {isAvailable ? (
                <Button href={liveUrls.posLogin} variant="ghost">
                  Ya tengo cuenta — Ingresar
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
