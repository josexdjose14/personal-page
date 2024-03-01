import React from 'react'
import './about.scss'

const About = () => {
  return (
    <section className='portfolioAbout' id='about'>
      <article className='portfolioAbout__tech'>
        <figure>
          <img src="images/html.png" alt="tech-icon" />
          <img src="images/js.png" alt="tech-icon" />
          <img src="images/css.png" alt="tech-icon" />
          <img src="images/sass.png" alt="tech-icon" />
          <img src="images/redux.png" alt="tech-icon" />
          <img src="images/react.png" alt="tech-icon" />
          <img src="images/git.png" alt="tech-icon" />
          <img src="images/firebaseIcon.png" alt="tech-icon" />
        </figure>
      </article>
      <article className='portfolioAbout__aboutme'>
        <h3>About me</h3>
        <p>I’m a Frontend  web developer highly competent in the creation and styling of web pages, management of server requests, management of APIs and HTTPs protocols. skilled in the use of programming languages such as JavaScript and frameworks such as ReactJS, as well as programming tools such as custom Hooks and Redux for managing states and functionalities. Able to style web pages using CSS and CSS frameworks such as SASS, Tailwind and Bootstrap. Organized, efficient in time management and capable of solving projects both individually and as a team. right now I’m learning Node.js, Express and MongoDB to fulfill the MERN stack</p>
      </article>
    </section>
  )
}

export default About