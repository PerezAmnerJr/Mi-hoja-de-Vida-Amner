export default function NavbarTop() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#top">Amner Pérez</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCv">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navCv" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><a className="nav-link" href="#profile">Perfil</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Educación</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
