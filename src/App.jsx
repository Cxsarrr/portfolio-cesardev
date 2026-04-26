import Background from "./components/Background";
import Header    from "./components/Header";
import Hero      from "./components/Hero";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import About     from "./components/About";
import TechStack from "./components/TechStack";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

/**
 * App — componente raíz.
 *
 * Estructura semántica:
 *   <Background />  → capa decorativa (orbs, ruido, gradientes)
 *   <Header />      → nav sticky + barra de progreso
 *   <main>          → contenido principal indexable por Google
 *     secciones…
 *   </main>
 *   <Footer />      → pie de página con nav secundaria y redes
 */
function App() {
  return (
    <>
      {/* Fondo decorativo — z-0 para que quede detrás de todo */}
      <Background />

      {/* Header sticky — z-50 para estar encima de todo */}
      <Header />

      {/* main: el contenido que Google indexa. Solo debe haber 1 por página */}
      <main
        className="relative z-10 min-h-screen bg-transparent"
        id="main-content"
        tabIndex={-1}
        aria-label="Contenido principal del portfolio"
      >
        {/* Main layout container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Hero />
          <Experience />
          <Projects />
          <About />
          <TechStack />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;