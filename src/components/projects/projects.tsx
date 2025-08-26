import { projectList } from '../../lib/data'
import ProjectCard from '../projectCard/projectCard'

const ProjectsComponent: React.FC = () => {
  return (
    <section id='projects' className='w-full h-full md:min-h-screen flex flex-col justify-start items-center bg-[url("/images/post-2.png")] p-4 gap-4'>
      <h3 className='font-bold text-xl mt-16'>Projects</h3>
      <aside className='w-full h-full flex flex-row flex-wrap justify-center items-center gap-4'>
        {
          projectList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </aside>
    </section>
  )
}

export default ProjectsComponent