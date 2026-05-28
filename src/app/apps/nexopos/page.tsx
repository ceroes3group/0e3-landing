import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppProductPage } from "@/components/AppProductPage";
import { getAppPage } from "@/lib/constants";

const slug = "nexopos";

export const metadata: Metadata = {
  title: "0E3 POS / NexoPOS — 0E3",
};

export default function NexoposAppPage() {
  const app = getAppPage(slug);
  if (!app) notFound();
  return <AppProductPage app={app} />;
}
