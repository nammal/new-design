import Benefits from "@/components/benifits";
import Conditions from "@/components/conditions";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Opportunities from "@/components/opportunities";

export default function Home() {
  return (
    <section>
      <Header />
      <HeroBanner />
      <Benefits />
      <Conditions />
      <Opportunities />
      <Contacts />
      <Footer />
    </section>
  );
}
