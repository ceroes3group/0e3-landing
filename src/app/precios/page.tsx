import Link from "next/link";
import type { Metadata } from "next";
import {
  getWhatsAppHref,
  liveUrls,
  pricingPlans,
  site,
} from "@/lib/constants";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Precios y planes — 0E3 POS",
  description:
    "Planes START, PRO y EMPRESA para comercios. Compará usuarios, sucursales y funciones.",
};

export default function PreciosPage() {
  const whatsappHref = getWhatsAppHref(
    "Hola, quiero consultar por un plan de 0E3 POS.",
  );

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
            Planes 0E3 POS
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Elegí el plan según el tamaño de tu negocio. Los valores en pesos se
            confirman al registrarte o al consultarnos — acá comparás qué incluye
            cada uno.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className="card-surface flex flex-col rounded-[1.5rem] p-6"
              >
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
                  {plan.name}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{plan.audience}</p>

                <div className="mt-6 space-y-2 text-sm text-white">
                  <p>
                    <span className="text-muted">Usuarios:</span> {plan.users}
                  </p>
                  <p>
                    <span className="text-muted">Sucursales:</span>{" "}
                    {plan.branches}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2 border-t border-white/5 pt-6 text-sm text-muted">
                  {plan.highlights.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-2">
                  <a
                    href={
                      whatsappHref ||
                      `mailto:${site.email}?subject=Plan%20${plan.name}%200E3%20POS`
                    }
                    className="inline-flex justify-center rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-primary/10"
                  >
                    Consultar plan
                  </a>
                  <a
                    href={liveUrls.posSignup}
                    className="inline-flex justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white"
                  >
                    Probar POS
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 card-surface rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold text-white">
              ¿Dudas sobre qué plan elegir?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Contanos cuántas personas usan el sistema y si tenés más de una
              sucursal. Te recomendamos START, PRO o EMPRESA sin venderte de más.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {whatsappHref ? (
                <Button href={whatsappHref}>Consultar por WhatsApp</Button>
              ) : (
                <Button href={`mailto:${site.email}`}>Escribinos por email</Button>
              )}
              <Button href={liveUrls.posSignup} variant="secondary">
                Probar 0E3 POS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
