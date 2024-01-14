import React from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components"
import ProjectModel from "./components/ProjectModel"
import { GlobalContextProvider } from "./contexts/globalContext"

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ProjectModel />
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
