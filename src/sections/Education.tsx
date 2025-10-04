export default function Education() {
  return (
    <section id="education" className="reveal mb-5">
      <h2 className="h3 mb-3">Educación</h2>

      <ul className="list-unstyled">
        {/* Universidad */}
        <li className="mb-4">
          <div className="fw-semibold">Ingeniería en Sistemas</div>
          <div className="text-body-secondary">
            Universidad Mariano Gálvez de Guatemala — 2021–Presente
          </div>
        </li>

        {/* Bachillerato */}
        <li className="mb-4">
          <div className="fw-semibold">
            Bachillerato en Ciencias y Letras con Orientación en Computación
          </div>
          <div className="text-body-secondary">
            Colegio Educación Tecnológica Fe Viva — Guazacapán, Santa Rosa • 2019–2020
          </div>
          <p className="mb-0 small">
            Base sólida en computación y fundamentos de programación.
          </p>
        </li>

        {/* Básicos */}
        <li className="mb-4">
          <div className="fw-semibold">Básicos (Nivel Medio)</div>
          <div className="text-body-secondary">
            Instituto Mixto de Educación Básica por Cooperativa — Aldea Platanares, Guazacapán • 2016–2018
          </div>
          <p className="mb-0 small">
            Formación general con énfasis en disciplinas científicas.
          </p>
        </li>

        {/* Primaria */}
        <li className="mb-0">
          <div className="fw-semibold">Primaria (Nivel Primario)</div>
          <div className="text-body-secondary">
            Escuela Oficial Rural Mixta Sector Barranca Honda — Aldea Platanares, Guazacapán • 2009–2015
          </div>
          <p className="mb-0 small">Educación primaria completa.</p>
        </li>
      </ul>
    </section>
  )
}
