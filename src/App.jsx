import Background from "./components/Background";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Background />
      <main className="relative z-10 min-h-screen overflow-hidden bg-transparent">
        <div className="relative z-10">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <About />
        <TechStack />
        <Contact />
        <Footer />
        </div>
      </main>
    </>
  );
}

export default App;