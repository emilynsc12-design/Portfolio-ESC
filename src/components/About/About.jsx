import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './About.css'

const FACTS = [
  { label: 'Ubicación', value: 'Trujillo, Perú' },
  { label: 'Experiencia', value: '1 año' },
  { label: 'Modalidad', value: 'Remoto / Híbrido / Presencial' },
  { label: 'Disponibilidad', value: 'Inmediata' },
]

export default function About() {
  const imgRef = useReveal()
  const textRef = useReveal()

  return (
    <section id="sobre-mi" className="section about">
      <div className="container about__inner">
        <div ref={imgRef} className="about__media reveal">
          <div className="about__photo-frame">
            <img
              src="/perfil.jpeg"
              alt="Foto de perfil"
            />
          </div>
        </div>

        <div ref={textRef} className="about__content reveal">
          <SectionHeading
            title="Sobre mi"
          />

          <p className="about__paragraph">
            Bachiller en Ingeniería de Computación y Sistemas con experiencia en desarrollo de 
            software e interés en el análisis de datos.
          </p>

          <p className="about__paragraph">
            Cuento con conocimientos en SQL, Python, Excel y herramientas de Business Intelligence 
            para la limpieza, análisis y visualización de datos, desarrollando soluciones orientadas a la toma de decisiones.
          </p>

          <dl className="about__facts">
            {FACTS.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt className="field-label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
