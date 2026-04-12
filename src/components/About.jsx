export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 pb-12 sm:px-6 md:px-10">
      <div className="mx-auto w-full">
        <p className="title-orange">SOBRE MI</p>
        <h2 id="about-title" className="title-white text-5xl font-bold text-white">
          Un perfil que mezcla codigo, criterio y colaboracion
        </h2>

        <article className="cardpc mt-8 grid w-full">
          <p className="card-text">
            Soy un desarrollador que disfruta mezclar logica y diseno. Me gusta trabajar en equipo y entregar soluciones con valor real.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#B8B9B6]">
            Me interesa construir productos claros, mantenibles y orientados a resolver problemas concretos.
          </p>
        </article>
      </div>
    </section>
  );
}
