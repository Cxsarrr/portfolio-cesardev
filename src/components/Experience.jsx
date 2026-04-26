// Experience data configuration
const experiences = [
{
  id: "web-agencia-digital",
    role: "Desarrollador Backend Jr",
      company: "Soluciones Americana SAS.",
        startDate: "Nov 2024",
          endDate: "May 2025",
            summary:
  "Trabajé en el desarrollo de soluciones backend y en la integración de servicios mediante APIs, participando en la construcción de aplicaciones web escalables y seguras.",
    highlights: [
      "Desarrollo de APIs REST con Django Rest Framework.",
      "Integración de servicios y optimización de rendimiento.",
      "Consumo y pruebas de endpoints desde interfaces web",
    ],
  },
{
  id: "backend-qa-partikle",
    role: "Quality Assurance Analyst",
      company: "Partikle SAS (Barranquilla)",
        startDate: "May 2025",
          endDate: null,
            summary:
  "Trabajé en la realización de pruebas unitarias en backend utilizando Pytest y pruebas funcionales en frontend orientadas a la experiencia del usuario.",
    highlights: [
      "Desarrollo de modelos, endpoints y componentes bajo arquitectura MVC empleando Django.",
      "Integración con APIs externas garantizando la correcta comunicación entre servicios.",
      "Mantenimiento y aseguramiento de la estabilidad de los flujos de datos.",
    ],
  },
{
  id: "freelance-independiente",
    role: "Desarrollador Web Freelance",
      company: "Proyectos Independientes",
        startDate: "Ene 2026",
          endDate: "Actualidad",
            summary:
  "Desarrollo de proyectos web y landing pages a medida, enfocándome en construir interfaces limpias y aprender buenas prácticas en Frontend.",
    highlights: [
      "Maquetación de sitios web utilizando HTML, CSS, JavaScript y React.",
      "Integración básica con APIs para consumir y mostrar datos en pantalla.",
      "Resolución de problemas técnicos y adaptación de diseños a la web.",
    ],
  },
];

// Main Experience Component
// Renders a list of professional experiences using structured data for SEO (Schema.org)
export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div>
        <header className="section-header">
          <p className="title-orange">EXPERIENCIA LABORAL</p>
          <h2
            id="experience-title"
            className="title-white text-5xl font-bold text-white"
          >
            Experiencia en <span className="text-[#ff8400]">desarrollo frontend</span>, web y producto digital
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B8B9B6] sm:text-lg">
            Mi trayectoria combina desarrollo frontend, construcción de sitios
            web optimizados para SEO y colaboración con equipos de producto,
            marketing y diseño.
          </p>
        </header>

        {/* Experience List Grid */}
        <ol className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <article
                className="card group h-full w-full transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8400]/40 hover:shadow-[0_8px_30px_rgba(255,132,0,0.1)]"
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                <meta itemProp="roleName" content={experience.role} />
                <div
                  itemProp="memberOf"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <h3 className="card-title" itemProp="name">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                    <span className="sr-only">Empresa: </span>
                    <span className="text-[#ff8400] mr-1">@</span>{experience.company}
                  </p>
                </div>

                <p className="card-meta mt-2 text-[#B8B9B6]">
                  <time itemProp="startDate" dateTime={experience.startDate}>
                    {experience.startDate}
                  </time>
                  {" - "}
                  {experience.endDate ? (
                    <time itemProp="endDate" dateTime={experience.endDate}>
                      {experience.endDate}
                    </time>
                  ) : (
                    <span aria-label="Actualidad">Actualidad</span>
                  )}
                </p>

                <p className="card-text mt-3" itemProp="description">
                  {experience.summary}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#B8B9B6]">
                  {experience.highlights.map((highlight, index) => (
                    <li key={`highlight-${index}`} className="flex items-start">
                      <span className="mr-2 text-[#ff8400] mt-[2px]">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
