import { About } from "../components/About";
import { Anexes } from "../components/Annexes";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
//import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/*<Projects />*/}
      <Skills />
      <Contact />
      <Anexes />
      <Footer />
    </>
  );
}
