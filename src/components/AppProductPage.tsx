import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { AppPageEntry } from "@/lib/constants";
import { site, statusStyles } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AppProductPageProps = {
  app: AppPageEntry;
};

export function AppProductPage({ app }: AppProductPageProps) {
  const isBeta = app.status === "En desarrollo";

  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/apps/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al catálogo
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
          {isBeta ? (
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-500/20">
              Beta / staging — dominio custom pendiente
            </span>
          ) : null}
        </div>

        <h1 className="mt-6 font-display text-4xl font-semibold text-white md:text-5xl">
          {app.name}
        </h1>
        <p className="mt-4 text-lg text-accent">{app.tagline}</p>
        <p className="mt-6 text-base leading-8 text-muted">{app.description}</p>

        <ul className="mt-8 space-y-3">
          {app.highlights.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/5 bg-surface/70 px-4 py-3 text-sm text-white"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 card-surface rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Acceso
          </p>
          <p className="mt-2 text-sm text-muted">
            Dominio objetivo:{" "}
            <span className="font-medium text-white">{app.targetDomain}</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            URL operativa hoy:{" "}
            <span className="font-medium text-white">{app.liveUrl}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={app.liveUrl}>
              <span className="inline-flex items-center gap-2">
                Abrir app
                <ExternalLink className="h-4 w-4" />
              </span>
            </Button>
            <Button href={`mailto:${site.email}?subject=${encodeURIComponent(app.name)}`} variant="secondary">
              Consultar acceso
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
