import { useReveal } from '../../hooks/useReveal.js'
import './ProjectCard.css'

export default function ProjectCard({ project, onOpen }) {
  const ref = useReveal()
  const { title, description, image, tags, links = {} } = project

  const openModal = () => onOpen(project)

  return (
    <article ref={ref} className="project-card reveal">
      <div className="project-card__image-wrap">
        {image ? (
          <img src={image} alt={`Vista previa del proyecto ${title}`} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 3v18h18" />
              <path d="M7 15l4-5 3 3 5-7" />
            </svg>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__footer">
        <button
          type="button"
          className="project-card__case"
          aria-haspopup="dialog"
          onClick={openModal}
        >
          Ver caso
        </button>

        <div className="project-card__links">
          {links.dashboard && (
            <a href={links.dashboard} target="_blank" rel="noopener noreferrer">
              Ver dashboard
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer">
              Repositorio
            </a>
          )}
        </div>
      </div>

      {/* Zona clicable: la imagen y el cuerpo abren el modal; el pie queda por encima. */}
      <button
        type="button"
        className="project-card__open"
        aria-label={`Ver caso del proyecto ${title}`}
        aria-haspopup="dialog"
        onClick={openModal}
      />
    </article>
  )
}
