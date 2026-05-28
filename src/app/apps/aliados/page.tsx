import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppProductPage } from "@/components/AppProductPage";
import { getAppPage } from "@/lib/constants";

const slug = "aliados";

export const metadata: Metadata = {
  title: "Aliados Comerciales — 0E3",
};

export default function AliadosAppPage() {
  const app = getAppPage(slug);
  if (!app) notFound();
  return <AppProductPage app={app} />;
}
