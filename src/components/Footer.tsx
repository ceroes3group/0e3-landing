import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src="/logo/0e3-logo.png"
            alt="0E3"
            width={110}
            height={36}
            className="h-8 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            {site.tagline}
            <br />
            {site.description}
          </p>
          <p className="mt-2 text-xs text-muted">
            {site.legalName} · Argentina
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-white">
            Inicio
          </Link>
          <Link href="/#productos" className="transition-colors hover:text-white">
            Productos
          </Link>
          <Link href="/precios/" className="transition-colors hover:text-white">
            Precios
          </Link>
          <Link href="/#contacto" className="transition-colors hover:text-white">
            Contacto
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-white"
          >
            {site.email}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
