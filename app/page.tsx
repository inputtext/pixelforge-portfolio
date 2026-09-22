import Experiments from "@/components/Experiments";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Experiments />
      <Process />
      <Contact />
    </main>
  );
}
