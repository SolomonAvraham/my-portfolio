import Contact from "@/components/sections/contact/Contact";
import Intro from "@/components/sections/intro/Intro";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <main className=" ">
      <Intro />
      <div className=" md:h-[25rem]   bg-me-one md:bg-cover bg-fixed  sm:bg-center bg-no-repeat   sm:hidden md:block"></div>
      <Skills />
      <div className=" md:h-[25rem]  bg-bg1   bg-fixed     bg-cover  bg-no-repeat   sm:hidden md:block"></div>
      <Projects />
      <div className=" md:h-[25rem]   bg-me-one-left md:bg-cover bg-fixed bg-left-top   bg-no-repeat   sm:hidden md:block"></div>

      <Contact />
    </main>
  );
}
