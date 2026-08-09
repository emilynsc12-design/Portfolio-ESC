import { useReveal } from '../../hooks/useReveal.js'
import './CV.css'

export default function CV() {
  const ref = useReveal()

  return (
    <section id="cv" className="section cv">
      <div className="container">
        <div ref={ref} className="cv__panel reveal">
          <div className="cv__text">
            <h2 className="cv__title">¿Quieres revisar mi experiencia completa?</h2>
            <p className="cv__desc">
              Descarga mi CV en PDF con el detalle de mi formación, experiencia laboral y
              proyectos destacados.
            </p>
          </div>

          <a
            href="/CV Sanchez Castillo.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="btn btn-primary cv__download"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Visualizar (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
