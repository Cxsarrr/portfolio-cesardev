import Background from "./components/Background";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

{/* Color titlos (naranja): #ff8400 */}
{/* Color gris: #b8b9b6 */}
{/* Color blanco: #ffffff */}
{/* Color gris mas claro: #2e2e2e */}
{/* Color */}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111]">
      <div className="relative z-10">
      <Background />
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
  );
}

export default App;