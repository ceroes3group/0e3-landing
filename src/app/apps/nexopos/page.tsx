import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppProductPage } from "@/components/AppProductPage";
import { getAppPage } from "@/lib/constants";

const slug = "nexopos";

export const metadata: Metadata = {
  title: "0E3 POS — Punto de venta para comercios",
  description:
    "Vendé, controlá stock, cerrá caja y mirá reportes. Probá 0E3 POS desde PC, tablet o celular.",
};

export default function NexoposAppPage() {
  const app = getAppPage(slug);
  if (!app) notFound();
  return <AppProductPage app={app} />;
}
