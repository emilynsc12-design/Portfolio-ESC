import { skillGroups, softSkills } from '../../data/skills.js'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import {
  FaPython,
  FaReact,
  FaJava,
  FaFileExcel,
  FaGit,
  FaCss3,
} from 'react-icons/fa'
import {
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSpringboot,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiFastapi,
  SiGooglesheets,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiLooker,
} from 'react-icons/si'
import {
  TbReportAnalytics,
  TbBrandCSharp,
  TbServer,
} from 'react-icons/tb'
import { IoLogoTableau } from 'react-icons/io5'
import './Skills.css'

// Iconos para cada habilidad técnica
const skillIcons = {
  React: <FaReact />,
  Angular: <SiAngular />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <FaCss3 />,
  Java: <FaJava />,
  'Spring Boot': <SiSpringboot />,
  'C#': <TbBrandCSharp />,
  '.NET': <SiDotnet />,
  PHP: <SiPhp />,
  Laravel: <SiLaravel />,
  FastAPI: <SiFastapi />,
  Python: <FaPython />,
  'Excel con Macros': <FaFileExcel />,
  'Google Sheets': <SiGooglesheets />,
  'Power BI': <TbReportAnalytics />,
  PostgreSQL: <SiPostgresql />,
  'SQL Server': <TbServer />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Git: <FaGit />,
  GitHub: <SiGithub />,
  Docker: <SiDocker />,
  'Looker Studio': <SiLooker />,
  Tableau: <IoLogoTableau />,
}

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">

        <SectionHeading
          title="Habilidades"
        />

        <h3 className="skills__divider-title">Técnicas</h3>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <SkillBlock key={group.label} title={group.label} skills={group.skills} />
          ))}
        </div>

        <h3 className="skills__divider-title">Blandas</h3>

        <div className="skills__grid skills__grid--center">
          <SkillBlock skills={softSkills} />
        </div>
      </div>
    </section>
  )
}

function SkillBlock({ title, skills, className = '' }) {
  const ref = useReveal()

  return (
    <div className={`skills__block ${className}`.trim()}>
      {title && <h3 className="skills__block-title">{title}</h3>}

      <div ref={ref} className="skills__chips reveal">
        {skills.map((skill) => (
          <span key={skill} className="skills__chip">
            {skillIcons[skill] && (
              <span className="skills__icon">{skillIcons[skill]}</span>
            )}
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
