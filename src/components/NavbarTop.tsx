import React from "react";
import "./NavbarTop.css";

export default function NavbarTop() {
  return (
    <nav className="navbar-top shadow-sm">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          Amner Dev
        </a>

        <ul className="nav-links">
          <li><a href="#education">Educación</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
