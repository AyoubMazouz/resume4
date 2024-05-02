import React from "react"
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components"
import ProjectModel from "./components/ProjectModel"
import { GlobalContextProvider } from "./contexts/globalContext"

const App = () => {
  return (
    <GlobalContextProvider>
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
          <div className="hidden lg:block">
            <StarsCanvas />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  )
}

export default App
