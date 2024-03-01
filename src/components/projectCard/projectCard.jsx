import React from 'react'
import './projectCard.scss'

const ProjectCard = ({ project }) => {
    const goToGitHub = () => {
        window.open(project.github, '_blank');
    }
    const goToDeploy = () => {
        window.open(project.deploy, '_blank');
    }

    return (
        <article className='portfolioProjectCard'>
            <figure className='portfolioProjectCard__frontcard'>
                <img src={project.image} alt="project-image" />
            </figure>
            <aside className='portfolioProjectCard__backcard'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <figure>
                    <img src="images/githubIcon.svg" alt="GitHub-icon" onClick={goToGitHub} />
                    <img src="images/deployIcon.svg" alt="Deploy-icon" onClick={goToDeploy} />
                </figure>
            </aside>

        </article>
    )
}

export default ProjectCard