export const site = {
  name: "0E3",
  legalName: "Cero Es Tres",
  tagline: "Tecnología que simplifica.",
  description:
    "Software, automatización e inteligencia artificial para simplificar operaciones reales.",
  url: "https://0e3.com.ar",
  email: "ceroes3group@gmail.com",
  github: "https://github.com/ceroes3group",
  docs: "https://github.com/ceroes3group/0e3-docs",
  linkedin: "#",
  whatsapp: "#",
} as const;

export type ProductStatus = "Disponible" | "En desarrollo" | "Próximamente";

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
