import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppProductPage } from "@/components/AppProductPage";
import { getAppPage } from "@/lib/constants";

const slug = "home";

export const metadata: Metadata = {
  title: "0E3 HOME — 0E3",
};

export default function HomeAppPage() {
  const app = getAppPage(slug);
  if (!app) notFound();
  return <AppProductPage app={app} />;
}
