import { createPortal } from 'react-dom'
import { FaChartLine, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useModal } from '../../hooks/useModal.js'
import './ProjectModal.css'

/** Botones de acción del modal. Se muestran solo si el proyecto tiene ese enlace. */
const ACTIONS = [
  { key: 'dashboard', label: 'Ver dashboard', icon: <FaChartLine />, variant: 'btn-primary' },
  { key: 'app', label: 'Abrir app', icon: <FaExternalLinkAlt />, variant: 'btn-secondary' },
  { key: 'code', label: 'Código en GitHub', icon: <FaGithub />, variant: 'btn-secondary' },
]

/** Secciones del caso de estudio (formato: Problema / Enfoque / Evidencia / Contexto). */
function CaseStudy({ caseStudy }) {
  const { problem, approach, evidence, scope } = caseStudy

  return (
    <>
      <section className="project-modal__section">
        <h4 className="project-modal__section-title">Problema</h4>
        <p className="project-modal__desc">{problem}</p>
      </section>

      <section className="project-modal__section">
        <h4 className="project-modal__section-title">Enfoque</h4>
        <p className="project-modal__desc">{approach}</p>
      </section>

      {evidence?.length > 0 && (
        <section className="project-modal__section">
          <h4 className="project-modal__section-title">Evidencia disponible</h4>
          <ul className="project-modal__evidence">
            {evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {scope && (
        <section className="project-modal__section">
          <h4 className="project-modal__section-title">Contexto y alcance</h4>
          <p className="project-modal__desc">{scope}</p>
        </section>
      )}
    </>
  )
}

export default function ProjectModal({ project, onClose }) {
  const contentRef = useModal(onClose)
  const { title, description, details, tags = [], links = {}, caseStudy } = project

  const activeActions = ACTIONS.filter((action) => links[action.key])
  const heading = caseStudy ? caseStudy.heading : title

  return createPortal(
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto: ${heading}`}
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="project-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
          data-modal-close
        >
          ✕
        </button>

        <div className="project-modal__body">
          <h3 className="project-modal__title">{heading}</h3>

          {caseStudy ? (
            <CaseStudy caseStudy={caseStudy} />
          ) : (
            <>
              <p className="project-modal__desc">{description}</p>
              {details && <p className="project-modal__desc">{details}</p>}

              <ul className="project-modal__tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </>
          )}

          {activeActions.length > 0 && (
            <div className="project-modal__actions">
              {activeActions.map((action) => (
                <a
                  key={action.key}
                  href={links[action.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-sm ${action.variant}`}
                >
                  {action.icon}
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
