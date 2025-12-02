export default function Experience() {
  return (
    <section id="experience" className="reveal mb-5">
      <h2 className="h3 mb-3">Experiencia</h2>

      {/* --- Desarrollo / Frontend --- */}
      <div className="mb-4">
        <h3 className="h6 text-uppercase text-muted mb-2">Desarrollo</h3>

        <article>
          <h4 className="h5 mb-1">Frontend Developer</h4>
          <div className="text-body-secondary mb-2">2025 — Presente</div>

          <ul className="mb-0">
            <li>Desarrollo de interfaces con React, Vite y TypeScript.</li>
            <li>Consumo de APIs REST y creación de componentes reutilizables.</li>
            <li>
              Integración de Bootstrap, diseño responsivo y buenas prácticas de accesibilidad.
            </li>
            <li>Optimización de carga, estructura del frontend y manejo de estados.</li>
            <li>Uso de Git/GitHub para control de versiones.</li>
          </ul>
        </article>
      </div>

      {/* --- Seguridad --- */}
      <div className="mb-3">
        <h3 className="h6 text-uppercase text-muted mb-3">Seguridad</h3>

        <div className="tl">

          {/* Puesto 2022–2025 */}
          <div className="tl-item">
            <span className="tl-dot bg-primary"></span>

            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h4 className="h5 mb-1">Oficial de Seguridad</h4>
                  <span className="badge rounded-pill text-bg-primary">2022 — 2025</span>
                </div>

                <div className="text-body-secondary">
                  WACKENHUT DE GUATEMALA S.A — Grupo Q — Guatemala, Carretera a El Salvador km 16.5
                </div>
                <div className="text-body-secondary small mb-2">
                  Detalle de fechas: 26/04/2022 – 10/01/2025
                </div>

                <ul className="mb-0">
                  <li>Servicio de seguridad y atención al cliente en instalaciones empresariales.</li>
                  <li>Control de accesos y reporte profesional de incidencias.</li>
                  <li>Trabajo en equipo y comunicación efectiva con personal administrativo.</li>
                  <li>Reducción de incidentes mediante monitoreo preventivo.</li>
                  <li>Manejo de CCTV, registro de visitas y resguardo de activos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Puesto 2021–2022 */}
          <div className="tl-item">
            <span className="tl-dot bg-primary"></span>

            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h4 className="h5 mb-1">Oficial de Seguridad</h4>
                  <span className="badge rounded-pill text-bg-secondary">2021 — 2022</span>
                </div>

                <div className="text-body-secondary">
                  Servicios de Vigilancia SECUR, S.A. — Sede San José Pinula
                </div>
                <div className="text-body-secondary small mb-2">
                  Detalle de fechas: 01/04/2021 – 24/04/2022
                </div>

                <ul className="mb-0">
                  <li>Prestación de servicios de seguridad en centros comerciales.</li>
                  <li>Monitoreo preventivo y respuesta inicial ante eventos.</li>
                  <li>Orientación al cliente y resguardo de activos.</li>
                  <li>Cero reportes negativos durante el período laboral.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>{/* /.tl */}
      </div>

      {/* --- CERTIFICACIONES --- */}
      <div className="mt-4">
        <h3 className="h6 text-uppercase text-muted mb-2">Certificaciones Relevantes</h3>

        <ul className="mb-0">
          <li>Certificación en Redes — fundamentos, topologías y configuración básica.</li>
          <li>Certificación en Ciberseguridad — conceptos esenciales y prácticas de protección.</li>
          <li>Excel — manejo de funciones básicas e intermedias.</li>
          <li>Word — redacción, formato profesional y elaboración de documentos.</li>
          <li>Bibliotecas de Desarrollo Front-End — React, Bootstrap, Tailwind y componentes UI.</li>
          <li>Cumbre de Tecnología y Ciberseguridad — actualización en tendencias modernas.</li>
        </ul>
      </div>
    </section>
  );
}
