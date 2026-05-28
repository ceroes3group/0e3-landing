import Link from "next/link";
import type { Metadata } from "next";
import { appPages, site, statusStyles } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apps — 0E3",
  description: "Catálogo de aplicaciones y productos del ecosistema 0E3.",
};

export default function AppsCatalogPage() {
  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-28">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-white"
        >
          ← Volver al inicio
        </Link>
        <h1 className="mt-8 font-display text-4xl font-semibold text-white md:text-5xl">
          Apps y productos 0E3
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Accedé a cada solución del ecosistema. Los enlaces externos usan las
          URLs operativas actuales hasta conectar los subdominios en{" "}
          <span className="text-white">{site.url}</span>.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {appPages.map((app) => (
            <article
              key={app.slug}
              className="card-surface flex flex-col rounded-[1.5rem] p-6"
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
              <p className="mt-3 text-xs text-muted">
                Destino: {app.targetDomain}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={app.internalPath}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-accent/10 hover:ring-accent/20"
                >
                  Ver ficha
                </Link>
                <a
                  href={app.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(30,144,255,0.2)]"
                >
                  Abrir app
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
