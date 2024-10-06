import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Image from "next/image";
import Portfolio from "@/components/portfolio";
import Dispatch from "@/components/dispatch";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" id="home">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Dispatch />
      <SectionDivider />
      <Contact />
    </main>
  );
}
