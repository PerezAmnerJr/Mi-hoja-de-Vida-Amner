// src/components/NavbarTop.tsx
import { useEffect, useRef, useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function NavbarTop() {
  const [expanded, setExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  // Cerrar al hacer click fuera
  useEffect(() => {
    if (!expanded) return
    function onDocClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [expanded])

  // Cerrar con Escape
  useEffect(() => {
    if (!expanded) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setExpanded(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [expanded])

  // Cerrar al hacer scroll (solo si está abierto)
  useEffect(() => {
    if (!expanded) return
    const onScroll = () => setExpanded(false)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [expanded])

  const closeMenu = () => setExpanded(false)

  return (
    <div ref={navRef}>
      <Navbar
        expand="lg"
        bg="body-tertiary"
        className="border-bottom"
        expanded={expanded}
        onToggle={(v) => setExpanded(!!v)}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#top" className="fw-semibold">Amner Pérez</Navbar.Brand>

          <Navbar.Toggle aria-controls="navCv" aria-label="Abrir menú" />
          <Navbar.Collapse id="navCv">
            <Nav className="ms-auto gap-2">
              <Nav.Link href="#education" onClick={closeMenu}>Educación</Nav.Link>
              <Nav.Link href="#experience" onClick={closeMenu}>Experiencia</Nav.Link>
              <Nav.Link href="#skills" onClick={closeMenu}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={closeMenu}>Proyectos</Nav.Link>
              <Nav.Link href="#contacto" onClick={closeMenu}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
