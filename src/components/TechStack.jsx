// External dependencies
import { SiDjango, SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiPostgresql, SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

// Cada tecnología: nombre, icono (componente) y color de marca
const technologies = [
    { name: "Python", Icon: FaPython, color: "#3776AB" },
    { name: "Django", Icon: SiDjango, color: "#092E20" },
    { name: "REST APIs", Icon: TbApi, color: "#FF6B35" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
];

// Main TechStack Component
// Displays an infinite scrolling marquee of technologies and tools used
export default function TechStack() {
    return (
        <section id="tech" aria-labelledby="tech-title" className="section">
            <header className="section-header">
                <p className="title-orange">TECNOLOGIAS</p>
                <h2 id="tech-title" className="title-white text-5xl font-bold text-white">
                    Tecnologías principales
                </h2>
            </header>

            {/* ul = lista no ordenada | flex-wrap = si no caben, bajan a la siguiente fila */}
            <ul className="mt-8 flex flex-wrap gap-4">
                {technologies.map(({ name, Icon, color }) => (
                    <li
                        key={name}
                        className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        style={{ "--hover-color": color }}
                    >
                        {/* El icono empieza gris (text-[#555]) y cambia al color específico en hover */}
                        <Icon size={22} className="text-[#888] transition-colors duration-300 group-hover:text-[var(--hover-color)]" aria-hidden="true" />
                        <span className="transition-colors duration-300 group-hover:text-white">{name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}