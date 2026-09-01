import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import StartProject from "./components/StartProject";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[68px] sm:pt-20">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <StartProject />
        <Team />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default App;
