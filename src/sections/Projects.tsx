// src/sections/Projects.tsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

type Project = {
  title: string
  description: string
  tech?: string[]
  repoUrl: string
  demoUrl?: string | null
}

const projects: Project[] = [
  {
    title: "Mi hoja de vida Amner",
    description:
      "CV online. Maquetación con HTML/CSS y componentes reutilizables.",
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/PerezAmnerJr/Mi-hoja-de-vida-Amner", // ← ajusta si tu slug es distinto
    demoUrl: null, // pon aquí tu GitHub Pages si lo publicas
  },
  {
    title: "Detalles personales",
    description:
      "Sección de datos personales con estilos y tipografía legible.",
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/PerezAmnerJr/Detalles-personales", // ← ajusta
    demoUrl: null,
  },
  {
    title: "Sistema",
    description:
      "Pequeño sistema con estilos CSS. Estructura base para CRUD simple.",
    tech: ["CSS"],
    repoUrl: "https://github.com/PerezAmnerJr/sistemita", // ✅ este lo compartiste
    demoUrl: null,
  },
  {
    title: "Formulario",
    description:
      "Formulario cargado en una página con validaciones básicas.",
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/PerezAmnerJr/Formulario", // ← ajusta
    demoUrl: null,
  },
  {
    title: "PortafoliodeTareas",
    description:
      "Portafolio  de Tareas",
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/PerezAmnerJr/Portafolio-de-Tareas.git", // ← ajusta
    demoUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="reveal mb-5">
      <h2 className="h3 mb-3">Proyectos</h2>

      <div className="row g-3">
        {projects.map((p) => (
          <div key={p.title} className="col-sm-6 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 card-title">{p.title}</h3>
                <p className="card-text text-body-secondary mb-3">
                  {p.description}
                </p>

                {/* Chips de tecnologías (opcional) */}
                {p.tech && (
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge text-bg-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto d-flex gap-2">
                  <a
                    className="btn btn-outline-dark btn-sm"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Ver código en GitHub"
                  >
                    <FaGithub className="me-2" />
                    Código
                  </a>

                  {p.demoUrl && (
                    <a
                      className="btn btn-primary btn-sm"
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Ver demo"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
