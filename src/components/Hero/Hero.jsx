import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="grid-backdrop" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">

          <h1 className="hero__title">
            Hola, soy <span className="hero__title-accent">Emilyn Sanchez Castillo</span>
            <br />
            Bachiller en Ing. Computación y Sistemas.
          </h1>

          <p className="hero__subtitle">
            Transformo datos en decisiones.
          </p>

          <div className="hero__actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
