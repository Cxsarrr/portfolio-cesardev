// Main Hero Component
// Renders the first visible section of the portfolio with the primary value proposition
export default function Hero() {
  return (
    <section id="inicio" className="section pt-12 lg:pt-20">
      <div className="grid w-full items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="max-w-none lg:max-w-2xl">
            <h1 className="leading-[0.95]">
              <span className="block text-5xl font-extrabold tracking-tight text-[#ff8400] sm:text-6xl md:text-7xl">
                Hey, soy Cesar
              </span>
              <span className="mt-3 block text-3xl font-medium tracking-tight text-white/90 sm:text-4xl md:text-5xl">
                Desarrollador Full Stack
              </span>
            </h1>

            <p className="mt-6 w-full text-base leading-relaxed text-[#B8B9B6] sm:text-lg">
              Construyo interfaces limpias, rápidas y pensadas para comunicar valor sin ruido.
            </p>

            <p className="mt-5 text-sm text-[#FF8400] md:text-base">
              Performance frontend, diseño de APIs y UX orientada a conversión.
            </p>

            <div className="mt-8 text-center flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a href="#projects" className="button-black" aria-label="Ir a la sección de proyectos">
                Ver proyectos
              </a>

              <a href="#contact" className="button-white" aria-label="Ir a la sección de contacto">
                Contáctame
              </a>
            </div>
          </div>

          <div className="mt-2 flex justify-start lg:mt-2 lg:justify-end">
            {/* Availability Badge */}
            <aside className="card h-auto max-w-full p-5 sm:max-w-md sm:p-6" aria-label="Disponibilidad laboral">
              <p className="text-xs text-[#B8B9B6]">Disponible para oportunidades</p>

              <p className="mt-4 text-[20px] font-semibold leading-snug text-[#FFFFFF] sm:text-[22px]">
                <span className="block">Busco proyectos <span className="text-[#ff8400]">desafiantes</span></span>
                <span className="block">en producto digital y desarrollo web.</span>
              </p>

              <span className="mt-6 inline-flex rounded-full border border-orange-500/20 bg-black/10 px-4 py-2 text-xs text-orange-400">
                Open to work · Full Stack
              </span>
            </aside>
          </div>
      </div>
    </section>
  );
}