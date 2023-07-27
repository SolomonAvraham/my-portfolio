import Intro from "@/components/sections/intro/Intro";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <main className=" ">
      <Intro />
      <Skills />
      <Projects />
    </main>
  );
}
