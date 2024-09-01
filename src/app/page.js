import Activities from "@/components/home/activities";
import CallToAction from "@/components/home/call-to-action";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Pillars from "@/components/home/pillars";
import Trifecta from "@/components/home/trifecta";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Pillars />
      <Trifecta />
      <Activities />
      <CallToAction />
    </>
  );
}
