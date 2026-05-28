export const site = {
  name: "0E3",
  legalName: "Cero Es Tres",
  tagline: "Tecnología que simplifica.",
  description:
    "Software, automatización e inteligencia artificial para simplificar operaciones reales.",
  url: "https://0es3.com.ar",
  email: "ceroes3group@gmail.com",
  github: "https://github.com/ceroes3group",
  docs: "https://github.com/ceroes3group/0e3-docs",
  linkedin: "#",
  whatsapp: "#",
} as const;

export type ProductStatus = "Disponible" | "En desarrollo" | "Próximamente";

export type HubLink = {
  label: string;
  href: string;
  external?: boolean;
  status?: ProductStatus;
};

export const ecosystemHub = [
  {
    id: "aliados-comerciales",
    title: "Aliados Comerciales",
    description:
      "Programa para aliados independientes que representan soluciones 0E3. Ingresos según resultados, sin relación de dependencia.",
    icon: "handshake",
    links: [
      {
        label: "Información del programa",
        href: "#aliados-comerciales",
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
        href: "https://nexopos-dc.web.app",
        external: true,
        status: "Disponible",
      },
      {
        label: "0E3 Gastro (web)",
        href: "https://e3-gastro-web.web.app",
        external: true,
        status: "En desarrollo",
      },
      {
        label: "Documentación POS",
        href: site.docs,
        external: true,
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
        href: `mailto:${site.email}?subject=0E3%20HOME%20-%20Acceso`,
        status: "En desarrollo",
      },
      {
        label: "0E3 Recovery",
        href: `mailto:${site.email}?subject=0E3%20Recovery`,
        status: "Próximamente",
      },
      {
        label: "0E3 Track",
        href: `mailto:${site.email}?subject=0E3%20Track`,
        status: "Próximamente",
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
        href: "#contacto",
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
  },
  {
    id: "gastro",
    name: "0E3 Gastro",
    description:
      "Operación gastronómica con ventas, mesas, comandas y flujos pensados para el servicio.",
    status: "En desarrollo" as ProductStatus,
    icon: "utensils",
  },
  {
    id: "ai",
    name: "0E3 AI",
    description:
      "Automatización e inteligencia artificial aplicada a procesos, soporte y decisiones.",
    status: "Próximamente" as ProductStatus,
    icon: "sparkles",
  },
  {
    id: "cloud",
    name: "0E3 Cloud",
    description:
      "Infraestructura, servicios compartidos y operaciones cloud para el ecosistema 0E3.",
    status: "En desarrollo" as ProductStatus,
    icon: "cloud",
  },
  {
    id: "track",
    name: "0E3 Track",
    description:
      "Trazabilidad, auditoría y seguimiento operativo con visibilidad clara del negocio.",
    status: "Próximamente" as ProductStatus,
    icon: "radar",
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
