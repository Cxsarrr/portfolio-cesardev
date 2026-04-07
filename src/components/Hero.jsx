export default function Hero() {
  return (
    <section className="px-10 pt-24 pb-16 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">

          <h1 className="leading-none">
            <span className="block text-5xl font-bold text-orange-500 md:text-7xl">
              Hey, soy Cesar
            </span>
            <span className="mt-3 block text-4xl font-bold text-white md:text-6xl">
              Desarrollador Full Stack
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Construyo interfaces limpias, rápidas y pensadas para comunicar
            valor sin ruido.
          </p>

          <p className="mt-6 text-sm font-semibold text-orange-500 md:text-base">
            Performance frontend, diseño de APIs y UX orientada a conversión.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
              Ver proyectos
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contáctame
            </button>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md">
            <p className="text-xs text-white/45">
              Disponible para oportunidades
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-snug text-white">
              Busco proyectos desafiantes en producto digital y desarrollo web.
            </h2>

            <div className="mt-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-400">
              Open to work · Full Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}