import { Header, Hero } from "@/components/Hero";
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
