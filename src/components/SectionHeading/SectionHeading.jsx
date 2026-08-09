import { useReveal } from '../../hooks/useReveal.js'
import './SectionHeading.css'

/**
 * field: nombre estilo "columna de dataset" (snake_case) mostrado como eyebrow.
 * title: título visible de la sección.
 * description: texto de apoyo opcional.
 * align: 'left' | 'center'
 */
export default function SectionHeading({ field, title, description, align = 'left' }) {
  const ref = useReveal()

  return (
    <div ref={ref} className={`section-heading section-heading--${align} reveal`}>
      <span className="field-label">{field}</span>
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  )
}
