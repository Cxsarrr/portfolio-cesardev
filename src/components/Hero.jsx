export default function Hero() {
  return (
    <section id="inicio" className="px-5 pt-28 pb-12 sm:px-6 md:px-10 lg:pt-36 lg:pb-16">
      <div className="grid w-full items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="max-w-none lg:max-w-2xl">
            <h1 className="leading-[0.95]">
              <span className="block text-4xl font-bold text-[#ff8400] sm:text-5xl md:text-6xl">
                Hey, soy Cesar
              </span>
              <span className="mt-2 block text-3xl font-bold text-[#FFFFFF] sm:text-4xl md:text-5xl">
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
            <aside className="card h-auto max-w-full p-5 sm:max-w-md sm:p-6" aria-label="Disponibilidad laboral">
              <p className="text-xs text-[#B8B9B6]">Disponible para oportunidades</p>

              <p className="mt-4 text-[20px] font-semibold leading-snug text-[#FFFFFF] sm:text-[22px]">
                <span className="block">Busco proyectos desafiantes</span>
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