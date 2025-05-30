import React from 'react'
import NavBar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Footer from './sections/Footer.jsx'
import Experiences from './sections/Experiences.jsx'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* <Experiences /> */}
      <Footer />
    </div>
  )
}

export default App
