import { useReveal } from '../../hooks/useReveal.js'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const ref = useReveal()
  const { title, description, image, tags, link } = project

  return (
    <article
      ref={ref}
      className="project-card reveal"
    >
      <div className="project-card__image-wrap">
        <img src={image} alt={`Vista previa del proyecto ${title}`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <a href={link} className="btn btn-secondary btn-sm project-card__cta">
          Ver proyecto
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </a>
      </div>
    </article>
  )
}
