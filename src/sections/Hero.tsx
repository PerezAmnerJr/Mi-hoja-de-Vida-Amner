export default function Hero() {
  return (
    <section id="top" className="reveal py-5 mb-4 rounded-4 text-center">
      <div className="mx-auto mb-3" style={{
        width: 120, height: 120, borderRadius: '50%',
        overflow: 'hidden', border: '3px solid var(--bs-primary)'
      }}>
        <img
          src="/foto perfil.png"   // 👈 aquí el nombre de tu archivo en public
          alt="Foto de Amner Pérez"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <h1 className="fw-bold mb-2">Amner Alberto Pérez Marroquín</h1>
      <p className="lead text-body-secondary mb-3">
        Desarrollador Frontend — React / TypeScript
      </p>
      <span className="badge text-bg-primary">Disponible</span>
    </section>
  )
}
