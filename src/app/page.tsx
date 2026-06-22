import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Trust } from "@/components/Trust";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
