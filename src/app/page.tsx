import { Header, Hero } from "@/components/Hero";
import { EcosystemAccess } from "@/components/EcosystemAccess";
import { Products } from "@/components/Products";
import { Philosophy } from "@/components/Philosophy";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EcosystemAccess />
        <Products />
        <Philosophy />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
