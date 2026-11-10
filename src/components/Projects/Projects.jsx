import { useCallback, useState } from 'react'
import { projects } from '../../data/projects.js'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import ProjectModal from '../ProjectModal/ProjectModal.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import './Projects.css'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  const openModal = useCallback((project) => setSelected(project), [])
  const closeModal = useCallback(() => setSelected(null), [])

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
            <ProjectCard key={project.id} project={project} onOpen={openModal} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={closeModal} />
      )}
    </section>
  )
}
