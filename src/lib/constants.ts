export const site = {
  name: "0E3",
  legalName: "Cero Es Tres",
  tagline: "Tecnología que simplifica.",
  description:
    "Software, automatización e inteligencia artificial para simplificar operaciones reales.",
  url: "https://0e3.com.ar",
  aliasUrl: "https://0es3.com.ar",
  email: "ceroes3group@gmail.com",
  github: "https://github.com/ceroes3group",
  docs: "https://github.com/ceroes3group/0e3-docs",
} as const;

/** Dominios objetivo (DNS custom — pendiente de conexión en varios casos) */
export const domains = {
  root: "https://0e3.com.ar",
  alias: "https://0es3.com.ar",
  pos: "https://pos.0e3.com.ar",
  home: "https://home.0e3.com.ar",
  aliados: "https://aliados.0e3.com.ar",
  gastro: "https://gastro.0e3.com.ar",
  gastroStaging: "https://staging.gastro.0e3.com.ar",
  gastroApkStaging: "https://staging.0e3.com.ar",
  docs: "https://docs.0e3.com.ar",
} as const;

/** URLs operativas hoy (Firebase .web.app) — usadas hasta cutover DNS */
export const liveUrls = {
  pos: "https://nexopos-dc.web.app",
  home: "https://oe3-home-beta.web.app",
  aliados: "https://oe3-aliados-comerciales.web.app",
  gastroStaging: "https://e3-gastro-staging-web.web.app",
  docs: site.docs,
} as const;

export type ProductStatus = "Disponible" | "En desarrollo" | "Próximamente";

export type HubLink = {
  label: string;
  href: string;
  external?: boolean;
  status?: ProductStatus;
  note?: string;
};

export type AppPageEntry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  targetDomain: string;
  liveUrl: string;
  internalPath: string;
  highlights: string[];
};

export const appPages: AppPageEntry[] = [
  {
    slug: "nexopos",
    name: "0E3 POS / NexoPOS",
    tagline: "Punto de venta multi-tenant para comercios reales.",
    description:
      "Control de ventas, stock, usuarios, sucursales y operación diaria con arquitectura multi-tenant.",
    status: "Disponible",
    targetDomain: domains.pos,
    liveUrl: liveUrls.pos,
    internalPath: "/apps/nexopos/",
    highlights: [
      "Multi-tenant y multi-sucursal",
      "Panel web en producción",
      "Migración de marca hacia 0E3 POS",
    ],
  },
  {
    slug: "gastro",
    name: "0E3 Gastro",
    tagline: "Operación gastronómica con mesas, comandas y cocina.",
    description:
      "POS gastronómico con app Android, web/PWA para PC y flujos de servicio pensados para el rubro.",
    status: "En desarrollo",
    targetDomain: domains.gastroStaging,
    liveUrl: liveUrls.gastroStaging,
    internalPath: "/apps/gastro/",
    highlights: [
      "Web staging operativa",
      "APK y OTA en hosting separado",
      "Producción en preparación",
    ],
  },
  {
    slug: "aliados",
    name: "Aliados Comerciales",
    tagline: "Programa para aliados independientes 0E3.",
    description:
      "Captación y gestión de aliados comerciales. Tecnología que simplifica, sin relación de dependencia.",
    status: "En desarrollo",
    targetDomain: domains.aliados,
    liveUrl: liveUrls.aliados,
    internalPath: "/apps/aliados/",
    highlights: [
      "Panel web desplegado",
      "Módulo aparte del sitio institucional",
      "Acceso por subdominio futuro",
    ],
  },
  {
    slug: "home",
    name: "0E3 HOME",
    tagline: "Control de gastos personales, familiares y microemprendimientos.",
    description:
      "App Flutter para finanzas personales con captura rápida, categorías y visibilidad clara del mes.",
    status: "En desarrollo",
    targetDomain: domains.home,
    liveUrl: liveUrls.home,
    internalPath: "/apps/home/",
    highlights: [
      "Beta Android y web",
      "Firebase oe3-home-beta",
      "Acceso web disponible hoy",
    ],
  },
];

export const ecosystemHub = [
  {
    id: "aliados-comerciales",
    title: "Aliados Comerciales",
    description:
      "Programa para aliados independientes que representan soluciones 0E3. Ingresos según resultados, sin relación de dependencia.",
    icon: "handshake",
    links: [
      {
        label: "Página del programa",
        href: "/apps/aliados/",
      },
      {
        label: "Abrir app (staging/beta)",
        href: liveUrls.aliados,
        external: true,
        status: "En desarrollo",
        note: `Destino: ${domains.aliados}`,
      },
      {
        label: "Solicitar acceso",
        href: `mailto:${site.email}?subject=Aliados%20Comerciales%200E3`,
      },
    ] satisfies HubLink[],
  },
  {
    id: "negocios",
    title: "NexoPOS y sistemas para negocios",
    description:
      "Punto de venta, gastronomía y herramientas operativas para comercios que necesitan control y velocidad.",
    icon: "store",
    links: [
      {
        label: "0E3 POS",
        href: liveUrls.pos,
        external: true,
        status: "Disponible",
        note: `Destino: ${domains.pos}`,
      },
      {
        label: "0E3 Gastro (web staging)",
        href: liveUrls.gastroStaging,
        external: true,
        status: "En desarrollo",
        note: `Destino: ${domains.gastroStaging}`,
      },
      {
        label: "Página NexoPOS",
        href: "/apps/nexopos/",
      },
      {
        label: "Página Gastro",
        href: "/apps/gastro/",
      },
    ] satisfies HubLink[],
  },
  {
    id: "apps",
    title: "Apps personales y comerciales",
    description:
      "Aplicaciones para finanzas personales, microemprendimientos y operaciones del día a día.",
    icon: "smartphone",
    links: [
      {
        label: "0E3 HOME",
        href: liveUrls.home,
        external: true,
        status: "En desarrollo",
        note: `Destino: ${domains.home}`,
      },
      {
        label: "Página 0E3 HOME",
        href: "/apps/home/",
      },
      {
        label: "Catálogo de apps",
        href: "/apps/",
      },
    ] satisfies HubLink[],
  },
  {
    id: "contacto",
    title: "Contacto",
    description:
      "Consultas comerciales, soporte institucional y propuestas para simplificar tu operación.",
    icon: "mail",
    links: [
      {
        label: "Escribinos por email",
        href: `mailto:${site.email}`,
      },
      {
        label: "GitHub",
        href: site.github,
        external: true,
      },
      {
        label: "Ir a la sección contacto",
        href: "/#contacto",
      },
    ] satisfies HubLink[],
  },
] as const;

export const products = [
  {
    id: "pos",
    name: "0E3 POS",
    description:
      "Punto de venta multi-tenant para comercios que necesitan control, velocidad y operación real.",
    status: "Disponible" as ProductStatus,
    icon: "store",
    href: "/apps/nexopos/",
  },
  {
    id: "gastro",
    name: "0E3 Gastro",
    description:
      "Operación gastronómica con ventas, mesas, comandas y flujos pensados para el servicio.",
    status: "En desarrollo" as ProductStatus,
    icon: "utensils",
    href: "/apps/gastro/",
  },
  {
    id: "ai",
    name: "0E3 AI",
    description:
      "Automatización e inteligencia artificial aplicada a procesos, soporte y decisiones.",
    status: "Próximamente" as ProductStatus,
    icon: "sparkles",
    href: undefined,
  },
  {
    id: "cloud",
    name: "0E3 Cloud",
    description:
      "Infraestructura, servicios compartidos y operaciones cloud para el ecosistema 0E3.",
    status: "En desarrollo" as ProductStatus,
    icon: "cloud",
    href: undefined,
  },
  {
    id: "track",
    name: "0E3 Track",
    description:
      "Trazabilidad, auditoría y seguimiento operativo con visibilidad clara del negocio.",
    status: "Próximamente" as ProductStatus,
    icon: "radar",
    href: undefined,
  },
];

export const philosophyPillars = [
  {
    title: "Simplicidad",
    description: "Menos fricción, más claridad en cada operación.",
  },
  {
    title: "Automatización",
    description: "Procesos que se resuelven solos, sin complejidad innecesaria.",
  },
  {
    title: "Control",
    description: "Visibilidad real sobre ventas, equipos y decisiones.",
  },
  {
    title: "Escalabilidad",
    description: "Arquitectura preparada para crecer con tu negocio.",
  },
  {
    title: "Velocidad",
    description: "Interfaces rápidas, flujos directos y respuesta inmediata.",
  },
];

export const techBadges = [
  "Firebase",
  "React",
  "Cloud",
  "IA",
  "Android",
  "Web",
  "PWA",
];

export const experienceFeatures = [
  {
    title: "Dashboards claros",
    description: "Métricas accionables sin ruido visual.",
  },
  {
    title: "Control operativo",
    description: "Sucursales, usuarios y permisos en un solo lugar.",
  },
  {
    title: "IA aplicada",
    description: "Automatización inteligente donde aporta valor real.",
  },
  {
    title: "Nube confiable",
    description: "Infraestructura moderna, segura y escalable.",
  },
];

export const statusStyles: Record<ProductStatus, string> = {
  Disponible: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  "En desarrollo": "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  "Próximamente": "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
};

export function getAppPage(slug: string): AppPageEntry | undefined {
  return appPages.find((page) => page.slug === slug);
}
