export const site = {
  name: "0E3",
  legalName: "Cero Es Tres",
  tagline: "Hecho para el mostrador.",
  description:
    "Vendé, controlá stock y cerrá caja sin planillas. 0E3 POS para kioscos, despensas y comercios de barrio.",
  heroTitle: "0E3 POS",
  heroSubtitle: "El sistema de gestión pensado para negocios reales.",
  heroDescription:
    "Vendé, controlá stock, administrá tu caja y seguí tu negocio desde cualquier lugar.",
  heroTagline: "Sin planillas. Sin complicaciones. Sin perder tiempo.",
  url: "https://0e3.com.ar",
  aliasUrl: "https://0es3.com.ar",
  email: "ceroes3group@gmail.com",
  /** Número WhatsApp solo dígitos con código país (ej. 5493754123456). Vacío = ocultar botón WA. */
  whatsapp: "",
  github: "https://github.com/ceroes3group",
  docs: "https://github.com/ceroes3group/0e3-docs",
} as const;

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/#productos" },
  { label: "Precios", href: "/precios/" },
  { label: "Contacto", href: "/#contacto" },
] as const;

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

/** Acceso al producto (uso interno; no mostrar URLs técnicas al visitante) */
export const liveUrls = {
  pos: "https://nexopos-dc.web.app",
  posSignup: "https://nexopos-dc.web.app/signup",
  posLogin: "https://nexopos-dc.web.app/login",
  home: "https://oe3-home-beta.web.app",
  aliados: "https://oe3-aliados-comerciales.web.app",
  gastroStaging: "https://e3-gastro-staging-web.web.app",
  docs: site.docs,
} as const;

export function getWhatsAppHref(
  message = "Hola, quiero consultar por 0E3 POS.",
): string | null {
  const digits = String(site.whatsapp || "").replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getConsultSecondaryCta(
  subject = "Consulta 0E3 POS",
  waMessage = "Hola, quiero consultar por 0E3 POS.",
) {
  const wa = getWhatsAppHref(waMessage);
  if (wa) {
    return { label: "Consultar por WhatsApp", href: wa };
  }
  return {
    label: "Consultar por email",
    href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}`,
  };
}

export type ProductStatus = "Disponible" | "En desarrollo" | "Próximamente";

export type AppPageEntry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  forWho: string;
  status: ProductStatus;
  internalPath: string;
  highlights: string[];
  includes: string[];
  /** CTA principal (signup, mailto, etc.) */
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Si true, no mostrar enlaces directos a apps en beta */
  hidePublicAppLink?: boolean;
};

export const appPages: AppPageEntry[] = [
  {
    slug: "nexopos",
    name: "0E3 POS",
    tagline: "El sistema para vender, controlar stock y cerrar caja sin complicaciones.",
    description:
      "0E3 POS está pensado para comercios que necesitan orden en el día a día: cobrar rápido, saber qué hay en el depósito, registrar movimientos de caja y ver reportes claros. Funciona en PC, tablet o celular.",
    forWho:
      "Despensas, kioscos, minimercados, distribuidoras, panaderías y comercios con una o varias sucursales.",
    status: "Disponible",
    internalPath: "/apps/nexopos/",
    highlights: [
      "Punto de venta y cajero móvil",
      "Control de stock por sucursal",
      "Caja, gastos y reportes",
      "Clientes y cuenta corriente",
      "Varios usuarios con permisos",
    ],
    includes: [
      "Ventas en mostrador y desde el celular",
      "Productos, precios y listas",
      "Compras y proveedores (según plan)",
      "Cierre de caja diario",
      "Dashboard y reportes de ventas",
    ],
    primaryCta: { label: "Probar 0E3 POS", href: liveUrls.posSignup },
    secondaryCta: getConsultSecondaryCta("Consulta 0E3 POS", "Hola, quiero probar 0E3 POS."),
  },
  {
    slug: "gastro",
    name: "0E3 Gastro",
    tagline: "Mesas, comandas y cocina organizadas para tu local.",
    description:
      "Solución para restaurantes, bares y locales gastronómicos. Estamos terminando la versión comercial; por ahora podés consultarnos para conocer avances y sumarte a la lista de interesados.",
    forWho: "Restaurantes, bares, cafeterías y locales con servicio en salón.",
    status: "En desarrollo",
    internalPath: "/apps/gastro/",
    highlights: [
      "Mesas y comandas",
      "Flujo cocina / mostrador",
      "Pensado para el ritmo del servicio",
    ],
    includes: [
      "Operación de salón",
      "Comandas a cocina",
      "Control básico de ventas del turno",
    ],
    primaryCta: {
      label: "Consultar disponibilidad",
      href: `mailto:${site.email}?subject=0E3%20Gastro%20-%20consulta`,
    },
    secondaryCta: {
      label: "Ver planes",
      href: "/precios/",
    },
    hidePublicAppLink: true,
  },
  {
    slug: "aliados",
    name: "Aliados Comerciales",
    tagline: "Sumate como partner independiente de 0E3.",
    description:
      "Programa para quienes quieren representar soluciones 0E3 en su zona. Sin relación de dependencia: ingresos según resultados y acompañamiento del equipo.",
    forWho: "Consultores, revendedores y profesionales que trabajan con comercios.",
    status: "En desarrollo",
    internalPath: "/apps/aliados/",
    highlights: [
      "Comercialización de productos 0E3",
      "Capacitación y materiales",
      "Contacto directo con el equipo",
    ],
    includes: [
      "Acceso al programa de aliados",
      "Materiales comerciales",
      "Soporte para presentaciones",
    ],
    primaryCta: {
      label: "Quiero ser aliado",
      href: `mailto:${site.email}?subject=Aliados%20Comerciales%200E3`,
    },
    hidePublicAppLink: true,
  },
  {
    slug: "home",
    name: "0E3 HOME",
    tagline: "Gastos personales y del hogar, en un solo lugar.",
    description:
      "App para organizar gastos familiares o de un emprendimiento chico. Producto en evolución, separado de la línea comercial B2B.",
    forWho: "Uso personal y familiar (no es el POS para tu comercio).",
    status: "En desarrollo",
    internalPath: "/apps/home/",
    highlights: [
      "Registro rápido de gastos",
      "Categorías simples",
      "Vista del mes",
    ],
    includes: ["App en desarrollo", "Consultas por email"],
    primaryCta: {
      label: "Consultar",
      href: `mailto:${site.email}?subject=0E3%20HOME`,
    },
    hidePublicAppLink: true,
  },
];

export const products = [
  {
    id: "pos",
    name: "0E3 POS",
    description:
      "Vendé, controlá stock y cerrá caja. El producto principal para tu comercio, hecho para el ritmo real del mostrador.",
    status: "Disponible" as ProductStatus,
    icon: "store",
    href: "/apps/nexopos/",
    featured: true,
  },
  {
    id: "gastro",
    name: "0E3 Gastro",
    description: "Mesas, comandas y operación para restaurantes y bares.",
    status: "En desarrollo" as ProductStatus,
    icon: "utensils",
    href: "/apps/gastro/",
    featured: true,
  },
  {
    id: "aliados",
    name: "Aliados Comerciales",
    description: "Representá 0E3 como partner independiente en tu zona.",
    status: "En desarrollo" as ProductStatus,
    icon: "handshake",
    href: "/apps/aliados/",
    featured: true,
  },
  {
    id: "motorlab",
    name: "0E3 MotorLab",
    description: "Herramientas para talleres y negocios del rubro automotor.",
    status: "Próximamente" as ProductStatus,
    icon: "wrench",
    href: undefined,
    featured: false,
  },
];

export const posBenefits = [
  {
    title: "Vendé más rápido",
    description: "Cobrá en mostrador o desde el celular, con menos pasos.",
  },
  {
    title: "Sabé qué queda en stock",
    description: "Mirá qué tenés y qué se está agotando, sin adivinar.",
  },
  {
    title: "Cerrá caja sin adivinar",
    description: "Ingresos, gastos y el cierre del día, claros.",
  },
  {
    title: "Mirá tu negocio desde el celular",
    description: "Ventas y movimientos cuando los necesitás.",
  },
  {
    title: "Menos pasos, menos errores",
    description: "Pantallas simples, hechas para el ritmo del mostrador.",
  },
];

export const realBusinessContent = {
  title: "Pensado para negocios reales",
  lines: [
    "No para empresas gigantes.",
    "No para equipos de sistemas.",
    "No para personas que quieren aprender software durante semanas.",
  ],
  body: "0E3 fue creado para quienes tienen que abrir un negocio todos los días y hacerlo funcionar.",
  idealFor: [
    "Kioscos",
    "Despensas",
    "Autoservicios",
    "Distribuidoras",
    "Comercios familiares",
  ],
  closing: "Si sabés usar WhatsApp, podés usar 0E3.",
} as const;

export const painPointsContent = {
  title: "Problemas que vemos todos los días",
  before: {
    label: "Lo que suele pasar",
    items: [
      "No saber cuánto dinero quedó realmente en caja.",
      "Vender productos sin darse cuenta de que ya no hay stock.",
      "Perder tiempo buscando precios.",
      "Tener que llamar para saber cómo viene el negocio.",
      "Llevar cuentas en papel, Excel o cuadernos.",
    ],
  },
  after: {
    label: "Lo que cambia con 0E3",
    items: [
      "Cada venta queda registrada.",
      "El stock se actualiza automáticamente.",
      "Sabés qué productos se venden más.",
      "Podés revisar tu negocio desde el celular.",
      "Tenés información clara para decidir mejor.",
    ],
  },
} as const;

export const merchantDifferenceContent = {
  titleLead: "Muchos sistemas están hechos por programadores.",
  titleAccent: "0E3 está hecho para comerciantes.",
  paragraphs: [
    "Por eso priorizamos pantallas simples, procesos rápidos, información clara y menos pasos para hacer lo mismo.",
    "La tecnología tiene que ayudarte a trabajar mejor. No convertirse en otro problema.",
  ],
} as const;

export const trustSignals = [
  {
    title: "Gente de acá",
    description:
      "Desarrollamos en Argentina y hablamos el idioma del mostrador, no el del manual técnico.",
  },
  {
    title: "Te respondemos nosotros",
    description:
      "Sin tickets eternos. Te orientamos por email para elegir el plan que te sirve.",
  },
  {
    title: "0E3 POS ya funciona hoy",
    description:
      "No te vendemos humo: podés probarlo y ver caja, stock y ventas en acción.",
  },
  {
    title: "Sin números inventados",
    description:
      "No prometemos mil clientes ni crecimiento mágico. Mostramos lo que el sistema hace.",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  audience: string;
  users: number;
  branches: number;
  highlights: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "start",
    name: "START",
    audience: "Kioscos, despensas y pequeños comercios.",
    users: 2,
    branches: 1,
    highlights: [
      "Ventas y punto de venta",
      "Stock y caja",
      "Clientes y reportes básicos",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    audience: "Autoservicios, minimercados y distribuidoras pequeñas.",
    users: 6,
    branches: 3,
    highlights: [
      "Todo START",
      "Compras y proveedores",
      "Transferencias entre sucursales",
      "Listas de precios y auditoría",
    ],
  },
  {
    id: "empresa",
    name: "EMPRESA",
    audience: "Supermercados, fábricas, panaderías y negocios con producción.",
    users: 15,
    branches: 10,
    highlights: [
      "Todo PRO",
      "Producción, recetas y materias primas",
      "Más usuarios y sucursales",
    ],
  },
];

export const statusStyles: Record<ProductStatus, string> = {
  Disponible: "bg-success/10 text-success ring-success/20",
  "En desarrollo": "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  "Próximamente": "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
};

export function getAppPage(slug: string): AppPageEntry | undefined {
  return appPages.find((page) => page.slug === slug);
}

/** Páginas destacadas en catálogo comercial (HOME al final, opcional) */
export const catalogPages = appPages.filter((p) => p.slug !== "home");
export const secondaryCatalogPages = appPages.filter((p) => p.slug === "home");
