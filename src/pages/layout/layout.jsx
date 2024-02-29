import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Home from '../../components/home/home'
import About from '../../components/about/about'
import Contact from '../../components/contact/contact'
import Projects from '../../components/projects/projects'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='portfolioLayout'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Layout