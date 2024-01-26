import Hero from "@/components/hero/hero";
import Mission from "@/components/mission/mission";
import Products from "@/components/products/products";
import Bitmemoir from "@/components/products/bitmemoir/bitmemoir";
import Contact from "@/components/contact/contact";
import Roadmap from "@/components/roadmap/roadmap";
import Tokenomics from "@/components/tokenomics/tokenomics";
import Partners from "@/components/partners/partners";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Products />
      <Bitmemoir />
      <Roadmap />
      <Tokenomics />
      <Partners />
      <Team />
      <Contact />
    </>
  );
}
