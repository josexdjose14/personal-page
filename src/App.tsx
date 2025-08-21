import './App.css'
import AboutComponent from './components/about/about'
import ContactComponent from './components/contact/contact'
import HeaderComponent from './components/header/Header'
import HomeComponent from './components/home/Home'
import ProjectsComponent from './components/projects/projects'

function App() {

  return (
    <>
      <HeaderComponent />
      <main className='font-poppins'>
        <HomeComponent />
        <AboutComponent />
        <ProjectsComponent />
        <ContactComponent />
      </main>
    </>
  )
}

export default App
