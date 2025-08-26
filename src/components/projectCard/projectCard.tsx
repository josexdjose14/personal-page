import React, { useState } from 'react'
import type { ProjectData } from '../../lib/definitions';

interface ProjectCardProps {
    project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [showBox, setShowBox] = useState(false)
    // const [extraClass, setExtraClass] = useState('');

    // const goToGitHub = () => {
    //     window.open(project.github, '_blank');
    // }
    // const goToDeploy = () => {
    //     window.open(project.deploy, '_blank');
    // }
    // const toShow = () => {
    //     setShowBox(!showBox);

    //     if (!showBox) {
    //         setExtraClass("showBox");
    //     } else {
    //         setExtraClass("");
    //     }
    // }

    return (
        // <article className="w-[300px] h-[200px] relative group cursor-pointer">
        //     {/* Frontcard */}
        //     <figure className="absolute inset-0 w-full h-full">
        //         <img
        //             src={project.image}
        //             alt="project-image"
        //             className="w-full h-full object-cover"
        //         />
        //     </figure>

        //     {/* Backcard */}
        //     <aside className="absolute inset-0 w-full h-full bg-white p-4 flex flex-col justify-center items-center
        //             opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        //         <h3 className="text-lg font-semibold">{project.name}</h3>
        //         <p className="text-sm text-center">{project.description}</p>
        //         <div className="flex gap-4 mt-2">
        //             <img src="images/githubIcon.svg" alt="GitHub-icon" onClick={() => window.open(project.github, "_blank")} className="w-6 h-6" />
        //             <img src="images/deployIcon.svg" alt="Deploy-icon" onClick={() => window.open(project.deploy, "_blank")} className="w-6 h-6" />
        //         </div>
        //     </aside>
        // </article>

        <article
            className="w-[300px] aspect-3/2 md:w-[400px] lg:w-[500px] as relative group cursor-pointer overflow-hidden rounded-md"
            onClick={() => setShowBox(!showBox)}
        >
            {/* Frontcard */}
            <figure className={`absolute inset-0 w-full h-full transition-opacity duration-300
                     ${showBox ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}>
                <img src={project.image} alt="project-image" className="w-full h-full" />
            </figure>

            {/* Backcard */}
            <aside className={`absolute inset-0 w-full h-full bg-white p-4 flex flex-col justify-center items-center md:justify-evenly
                     transition-opacity duration-300 ${showBox ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                <h3 className='font-semibold'>{project.name}</h3>
                <p className='text-sm max-h-4/5 overflow-y-scroll md:text-base md:max-h-full md:overflow-y-hidden'>{project.description}</p>
                <div className="flex gap-4 mt-2">
                    <img src="images/githubIcon.svg" alt="GitHub-icon" onClick={() => window.open(project.github, "_blank")} className="w-6 h-6" />
                    <img src="images/deployIcon.svg" alt="Deploy-icon" onClick={() => window.open(project.deploy, "_blank")} className="w-6 h-6" />
                </div>
            </aside>
        </article>
    )
}

export default ProjectCard