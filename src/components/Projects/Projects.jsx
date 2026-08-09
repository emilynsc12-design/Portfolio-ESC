import { projects } from '../../data/projects.js'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <SectionHeading
          title="Proyectos"
          description="Una selección de análisis realizados con datos simulados y públicos, enfocados en resolver preguntas concretas de negocio."
        />

        {/* Para agregar un proyecto nuevo, edita src/data/projects.js */}
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
