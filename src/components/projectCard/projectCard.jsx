import React, { useState } from 'react'
import './projectCard.scss'

const ProjectCard = ({ project }) => {
    const [showBox, setShowBox] = useState(false)
    const [extraClass, setExtraClass] = useState('');

    const goToGitHub = () => {
        window.open(project.github, '_blank');
    }
    const goToDeploy = () => {
        window.open(project.deploy, '_blank');
    }
    const toShow = () => {
        setShowBox(!showBox);

        if (!showBox) {
            setExtraClass("showBox");
        } else {
            setExtraClass("");
        }
    }

    return (
        <article className='portfolioProjectCard' onClick={toShow}>
            <figure className='portfolioProjectCard__frontcard'>
                <img src={project.image} alt="project-image" />
            </figure>
            <aside className={`portfolioProjectCard__backcard ${extraClass}`}>
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