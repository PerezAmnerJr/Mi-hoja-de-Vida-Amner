// src/App.tsx
import NavbarTop from './components/NavbarTop';
import BackToTop from './components/BackToTop';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Importa la imagen desde src/assets
import fotoPerfil from "./assets/fotoperfil.jpg";

export default function App() {
  return (
    <>
      <NavbarTop />

      {/* CV layout */}
      <div className="cv container-fluid">
        <div className="row min-vh-100">

          {/* ===== LADO IZQUIERDO ===== */}
          <aside className="cv-sidebar col-12 col-lg-4 col-xl-3 p-4">

            {/* FOTO */}
            <div className="cv-photo mb-4 mx-auto">
              {/* usa la variable importada */}
              <img src={fotoPerfil} alt="Foto de perfil" className="cv-photo-img" />
            </div>

            {/* Resumen */}
            <section className="cv-block mb-4">
              <p className="mb-0 opacity-90">
                Me caracterizo por mi compromiso, responsabilidad y deseo constante de superación. Valoro los retos como oportunidades para aprender y fortalecer mis capacidades. Actualmente curso la carrera de Ingeniería en Sistemas y cuento con conocimientos en bases de datos, programación y ciberseguridad. Soy Innovador, creativo y con mentalidad de equipo. Experiencia creando
                interfaces en React/TypeScript, componentes reutilizables y rendimiento.
              </p>
            </section>

            {/* Tecnologías */}
            <section className="cv-block mb-4">
              <h3 className="cv-title">Technologies</h3>
              <Skills />
            </section>

            {/* Educación */}
            <section className="cv-block">
              <h3 className="cv-title">Education</h3>
              <Education />
            </section>

          </aside>

          {/* ===== LADO DERECHO ===== */}
          <main className="cv-content col-12 col-lg-8 col-xl-9 p-4">

            <header className="mb-4">
              <h1 className="cv-heading">Front End Developer</h1>
            </header>

            <section className="cv-block">
              <h2 className="cv-section">Work Experience</h2>
              <Experience />
            </section>

            <section className="cv-block">
              <h2 className="cv-section">Projects</h2>
              <Projects />
            </section>

            <section className="cv-block">
              <h2 className="cv-section">Contact</h2>
              <Contact />
            </section>

          </main>

        </div>
      </div>

      <BackToTop />
    </>
  );
}
