import { SiTypescript, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiIonic } from "react-icons/si";


const AboutComponent: React.FC = () => {
  return (
    <section id='about' className='w-full h-full bg-fucsia-100 flex flex-col md:flex-row md:h-screen'>
      <article className="w-full h-1/2 flex flex-col justify-center items-center text-base md:w-1/2 md:h-full md:flex-row md:justify-start">

        {/* Frontend */}
        <div className="w-full md:w-1/3 flex flex-col items-center pt-16 md:pt-0">
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          <figure className="w-full h-full flex flex-row flex-wrap justify-center items-center gap-2 md:p-4">
            <img src="images/html.png" alt="HTML" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="images/css.png" alt="CSS" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="images/js.png" alt="JavaScript" className="w-12 h-12 md:w-16 md:h-16 " />
            {/* <img src="images/ts.png" alt="TypeScript" className="w-16 h-16" /> */}
            <SiTypescript color="#3178C6" className="w-12 h-12 md:w-16 md:h-16 " />
            {/* <SiTypescript size={100} title="TypeScript" /> */}
            <img src="images/react.png" alt="React" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="images/redux.png" alt="Redux" className="w-12 h-12 md:w-16 md:h-16" />
            <SiIonic className="w-16 h-16 text-[#3880FF]" title="Ionic" />
            {/* <img src="images/tailwind.png" alt="Tailwind" className="w-16 h-16" />
            <img src="images/bootstrap.png" alt="Bootstrap" className="w-16 h-16" /> */}
            <SiTailwindcss color="#06B6D4" className="w-12 h-12 md:w-16 md:h-16" />
            <SiBootstrap color="#7952B3" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="images/sass.png" alt="Sass" className="w-12 h-12 md:w-16 md:h-16" />
          </figure>
        </div>

        {/* Backend */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:p-4">
          <h3 className="text-lg font-semibold mb-2">Backend</h3>
          <figure className="w-full h-full flex flex-row flex-wrap justify-center items-center gap-2">
            {/* <img src="images/node.png" alt="Node.js" className="w-16 h-16" />
            <img src="images/express.png" alt="Express" className="w-16 h-16" /> */}
            <SiNodedotjs color="#339933" className="w-12 h-12 md:w-16 md:h-16" />
            <SiExpress color="#000000" className="w-12 h-12 md:w-16 md:h-16" />
          </figure>
        </div>

        {/* Database */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:p-4">
          <h3 className="text-lg font-semibold mb-2">Database</h3>
          <figure className="w-full h-full flex flex-row flex-wrap justify-center items-center gap-2">
            {/* <img src="images/mongo.png" alt="MongoDB" className="w-16 h-16" /> */}
            {/* <SiMongodb color="#47A248" className="w-16 h-16" /> */}
            <SiMongodb className="w-12 h-12 md:w-16 md:h-16 text-[#47A248]" />
            <img src="images/firebaseIcon.png" alt="Firebase" className="w-12 h-12 md:w-16 md:h-16" />
          </figure>
        </div>

      </article>
      <article className='w-full h-1/2 flex flex-col gap-2 p-4 justify-center items-center text-base md:w-1/2 md:h-full'>
        <h3 className="px-2 py-1 m-0 bg-indigo-900 rounded-t-xl rounded-bl-xl font-bold text-xl">About me</h3>
        <p className="text-xs sm:text-base">I’m a Frontend  web developer highly competent in the creation and styling of web pages, management of server requests, management of APIs and HTTPs protocols. skilled in the use of programming languages such as JavaScript/TypeScript and frameworks such as ReactJS, as well as programming tools such as custom Hooks and Redux for managing states and functionalities. Able to style web pages using CSS and CSS frameworks such as SASS, Tailwind and Bootstrap. Organized, efficient in time management and capable of solving projects both individually and as a team. right now I’m learning Node.js, Express and MongoDB to fulfill the MERN stack</p>
      </article>
    </section>
  )
}

export default AboutComponent