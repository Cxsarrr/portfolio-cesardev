export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 pb-12 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-none">
        <div className="max-w-3xl">
          <p className="title-orange">SOBRE MI</p>
          <h2 id="about-title" className="title-white mt-2 text-4xl font-bold text-white sm:text-5xl">
            Un perfil que mezcla codigo, criterio y colaboracion
          </h2>
        </div>
        <div className="mt-8">
          <article className="card w-full overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8400]">
                Enfoque
              </p>
              <p className="card-text">
                Desarrollador Full Stack enfocado en crear productos digitales claros, eficientes y escalables.
                Trabajo principalmente con React, Django y bases de datos relacionales y no relacionales, cuidando el
                rendimiento, la experiencia de usuario y una entrega que se sienta sólida desde el primer vistazo.
                Me interesa resolver problemas reales, optimizar procesos y colaborar en equipos donde diseño,
                producto y desarrollo avancen en la misma dirección.

                </p>
              </div>

              <div className="grid gap-4">
                <div className="border-l-2 border-l-[#FF8400]/50 pl-4">
                  <p className="text-xs title-orange">Foco</p>
                  <p className="card-text">Claridad, rendimiento y producto</p>
                </div>
                <div className="border-l-2 border-l-[#FF8400]/50 pl-4">
                  <p className="text-xs title-orange">Objetivo</p>
                  <p className="card-text">
                    Seguir creciendo mientras aporto impacto real a proyectos que importan.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
