// Main Projects Component
// Renders a grid of recent project cards with links to live demos and source code
export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="section">
            <header className="section-header">
                <p className="title-orange">PROYECTOS</p>
                <h2 id="projects-title" className="title-white text-5xl font-bold text-white">
                    Exploraciones recientes
                </h2>
            </header>

            {/* Projects Grid Container */}
            <ul className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                {/* Project Card Item */}
                <li>
                    <article className="card h-full">
                        <h3 className="card-title">Proyecto 1</h3>
                        <p className="card-meta">React · Django</p>
                        <p className="card-text">Coming soon</p>
                        <div className="mt-4 flex gap-4">
                                <button type="button" className="w-full button-black" disabled aria-disabled="true">
                                    Live Demo
                                </button>
                                <button type="button" className="w-full button-white" disabled aria-disabled="true">
                                    GitHub
                                </button>
                        </div>
                    </article>
                </li>

                <li>
                    <article className="card h-full">
                        <h3 className="card-title">Proyecto 2</h3>
                        <p className="card-meta">React · Django</p>
                        <p className="card-text">Coming soon</p>
                        <div className="mt-4 flex gap-4">
                                <button type="button" className="w-full button-black" disabled aria-disabled="true">
                                    Live Demo
                                </button>
                                <button type="button" className="w-full button-white" disabled aria-disabled="true">
                                    GitHub
                                </button>
                        </div>
                    </article>
                </li>

                <li>
                    <article className="card h-full">
                        <h3 className="card-title">Proyecto 3</h3>
                        <p className="card-meta">React · Django</p>
                        <p className="card-text">Coming soon</p>
                        <div className="mt-4 flex gap-4">
                                <button type="button" className="w-full button-black" disabled aria-disabled="true">
                                    Live Demo
                                </button>
                                <button type="button" className="w-full button-white" disabled aria-disabled="true">
                                    GitHub
                                </button>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    );
}