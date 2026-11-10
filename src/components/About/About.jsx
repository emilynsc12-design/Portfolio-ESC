import { useReveal } from '../../hooks/useReveal.js'
import './About.css'

const PILLARS = [
  {
    index: '01',
    label: 'Análisis',
    title: 'De la pregunta al indicador',
    text: 'Python, pandas, SQL, análisis exploratorio y comprobación de calidad.',
  },
  {
    index: '02',
    label: 'Business Intelligence',
    title: 'Modelos y dashboards interactivos',
    text: 'Power BI, Power Query, Tableau y Looker Studio. Diseño de modelos dimensionales y reportes automatizados.',
  },
  {
    index: '03',
    label: 'Desarrollo de aplicaciones de datos',
    title: 'Interfaces y herramientas de datos',
    text: 'Gradio, Python, FastAPI. Creación de aplicaciones interactivas y herramientas web para la visualización o carga de datos.',
  },
]

export default function About() {
  const contentRef = useReveal()
  const pillarsRef = useReveal()

  return (
    <section id="sobre-mi" className="section about">
      <div className="container about__inner">
        <div ref={contentRef} className="about__content reveal">
          <span className="field-label about__eyebrow">Mi enfoque</span>

          <h2 className="about__title">
            Entender primero.
            <br />
            Modelar después.
          </h2>

          <p className="about__paragraph">
            Me interesa comenzar mi carrera en análisis de datos. Mi formación y
            mis proyectos combinan limpieza de datos, modelado relacional, visualización
            y aprendizaje automático.
          </p>

          <p className="about__paragraph">
            Busco oportunidades junior en Trujillo o remotas desde Perú. Valoro los
            problemas concretos, la documentación clara y el trabajo en equipo.
          </p>
        </div>

        <div ref={pillarsRef} className="about__pillars reveal">
          {PILLARS.map((pillar) => (
            <div key={pillar.index} className="about__pillar">
              <span className="about__pillar-label">
                {pillar.index} / {pillar.label}
              </span>
              <h3 className="about__pillar-title">{pillar.title}</h3>
              <p className="about__pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
