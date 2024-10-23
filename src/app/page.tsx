import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
