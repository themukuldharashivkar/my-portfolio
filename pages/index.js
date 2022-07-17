import Contact from "../components/Contact";
import Skills from "../components/Skills";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
