export default function TechStack() {
    const techItems = [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Django',
        'PostgreSQL',
    ];

    return (
        <section id="tech" aria-labelledby="tech-title" className="px-5 pb-12 sm:px-6 md:px-10">
            <header className="mx-auto w-full">
                <p className="title-orange">TECNOLOGIAS</p>
                <h2 id="tech-title" className="title-white text-5xl font-bold text-white">Tecnologias principales</h2>
            </header>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Lista de tecnologias principales">
                {techItems.map((tech) => (
                    <li key={tech}>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#FFFFFF] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                            {tech}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}