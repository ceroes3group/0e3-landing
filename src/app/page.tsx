import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FamiliarRoutine } from "@/components/FamiliarRoutine";
import { WhyZeroE3 } from "@/components/WhyZeroE3";
import { RealBusiness } from "@/components/RealBusiness";
import { PainPoints } from "@/components/PainPoints";
import { MerchantDifference } from "@/components/MerchantDifference";
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
        <FamiliarRoutine />
        <WhyZeroE3 />
        <RealBusiness />
        <PainPoints />
        <MerchantDifference />
        <Products />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
