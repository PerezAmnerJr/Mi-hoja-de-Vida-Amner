import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Contact() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const form = e.currentTarget
    if (!form.checkValidity()) {
      e.preventDefault(); e.stopPropagation()
      form.classList.add('was-validated')
      return
    }
    e.preventDefault()
    form.classList.remove('was-validated')
    form.reset()
    alert('¡Gracias! Tu mensaje fue validado correctamente.')
  }

  return (
    <section id="contacto" className="py-5 bg-body-secondary">
      <Container>
        <h2 className="mb-4">Contacto</h2>
        <Row className="g-4">
          {/* === Formulario === */}
          <Col xs={12} lg={7}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" placeholder="Tu nombre" />
                <div className="invalid-feedback">Por favor ingresa tu nombre.</div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" defaultValue="perezamner2001@gmail.com" />
                <div className="invalid-feedback">Ingresa un correo válido.</div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control required as="textarea" rows={4} placeholder="¿Cómo puedo ayudarte?" />
                <div className="invalid-feedback">Escribe un mensaje.</div>
              </Form.Group>
              <div className="d-flex gap-2">
                <Button type="submit"><i className="bi bi-send me-2"></i>Enviar</Button>
                <Button
                  variant="outline-secondary"
                  href="mailto:perezamner2001@gmail.com?subject=Contacto%20desde%20la%20web">
                  Contactar por email
                </Button>
              </div>
            </Form>
          </Col>

          {/* === Información lateral === */}
          <Col xs={12} lg={5}>
            <div className="p-4 bg-body rounded-3 h-100">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <i className="bi bi-telephone me-2"></i>
                  <strong>Teléfono:</strong> 42950688
                </li>
                <li className="mb-3">
                  <i className="bi bi-linkedin me-2"></i>
                  <strong>LinkedIn:</strong>
                  <div className="mt-1">
                    <Button
                      size="sm"
                      variant="primary"
                      href="https://www.linkedin.com/in/amner-perez-015987307"
                      target="_blank"
                    >
                      Ver perfil
                    </Button>
                  </div>
                </li>
                <li className="mb-3">
                  <i className="bi bi-github me-2"></i>
                  <strong>GitHub:</strong>
                  <div className="mt-1">
                    <Button
                      size="sm"
                      variant="dark"
                      href="https://github.com/PerezAmnerJr"
                      target="_blank"
                    >
                      Ir a GitHub
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
