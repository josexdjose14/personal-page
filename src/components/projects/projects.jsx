import React from 'react'
import './projects.scss'
import { projectList } from '../../services/projectList'
import ProjectCard from '../projectCard/projectCard'

const Projects = () => {
  return (
    <section id='projects' className='portfolioProjects'>
      <h3>Projects</h3>
      <aside className='portfolioProjects__box'>
        {
          projectList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </aside>
    </section>
  )
}

export default Projects