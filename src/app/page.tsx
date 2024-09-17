import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Image from "next/image";
import Portfolio from "@/components/portfolio";
import Dispatch from "@/components/dispatch";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Dispatch />
    </main>
  );
}
