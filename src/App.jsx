
import './App.css'
import Cards from './assets/components/cards/Cards'
import Footer from './assets/components/footer/Footer'
import Hero from './assets/components/hero/Hero'
import Nav from './assets/components/nav/Nav'
import Skills from './assets/components/skills/Skills'

function App() {


  return (
    <>
      <Nav />
      <Hero />
      <h3 id="projects">Projects</h3>
      <div className='projects'>
        <Cards />
        <Cards />
        <Cards />
      </div>
      <h3 id="skills">SKILLS</h3>
      <div className='skills'>
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>

      <h3 id='contact'>Contact</h3>
      <button>Email Me</button>
      <Footer />
    </>
  )
}

export default App
