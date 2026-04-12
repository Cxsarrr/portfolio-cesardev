export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="px-5 pb-12 sm:px-6 md:px-10">
            <div className="mx-auto w-full">
                <p className="title-orange">EXPERIENCIA LABORAL</p>
                <h2 id="experience-title" className="title-white text-5xl font-bold text-white">Trayectoria</h2>

                <ul className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                    <li>
                        <article className="card w-full h-full">
                            <h3 className="card-title">Frontend Developer</h3>
                            <p className="card-meta">Tech Studio · 2024 - Actualidad</p>
                            <p className="card-text">
                                Desarrollo de interfaces escalables con React y TypeScript,
                                integración de APIs y mejora de performance.
                            </p>
                        </article>
                    </li>

                    <li>
                        <article className="card w-full h-full">
                            <h3 className="card-title">Desarrollador Web</h3>
                            <p className="card-meta">Agencia Digital · 2022 - 2024</p>
                            <p className="card-text">
                                Implementación de sitios y e-commerce, trabajo con equipos de
                                diseño y marketing, y optimización SEO técnico.
                            </p>
                        </article>
                    </li>

                    <li>
                        <article className="card w-full h-full">
                            <h3 className="card-title">Desarrollador Web</h3>
                            <p className="card-meta">Agencia Digital · 2022 - 2024</p>
                            <p className="card-text">
                                Implementación de sitios y e-commerce, trabajo con equipos de
                                diseño y marketing, y optimización SEO técnico.
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    );
}