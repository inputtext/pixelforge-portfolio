import Contact from "@/components/Contact";
import Experiments from "@/components/Experiments";
import Hero from "@/components/Hero";
import GSAPAnimations from "@/components/GSAPAnimations";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <GSAPAnimations />
      <Navbar />
      <Hero />
      <SelectedWork />
      <Experiments />
      <Process />
      <Contact />
    </main>
  );
}
