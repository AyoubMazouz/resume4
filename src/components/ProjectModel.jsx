import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "../constants"
import { useGlobalContext } from "../contexts/globalContext"
import { colors } from "../constants"
import { github, demo } from "../assets"

const ProjectModel = () => {
  const { currProject, setCurrProject } = useGlobalContext()

  if (currProject !== null)
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-40 fixed top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primary/75 flex justify-center items-center"
          onClick={() => {
            setCurrProject(null)
            document.body.style.overflow = "auto"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: "100vh", transition: { duration: 1 } }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100vh" }}
            className="model-w bg-tertiary py-12 px-6 rounded-2xl shadow-xl max-h-[90vh] overflow-y-scroll lg:overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:flex gap-x-6">
              <div className="lg:hidden">
                <h1 className="text-2xl font-semibold">{projects[currProject].name}</h1>
                <div className="flex flex-wrap text-sm gap-y-1 gap-x-2  my-2">
                  {projects[currProject].technologies.map((tech, i) => (
                    <span className={`${colors[i % colors.length]}`}>#{tech}</span>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video max-h-96 h-full">
                <img
                  src={`/projects/${projects[currProject].name.toLowerCase().replaceAll(" ", "-")}/0-1920.jpeg`}
                  alt=""
                />
                <div className="lg:hidden absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(demoURL, "_blank")
                    }}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
                  >
                    <img src={demo} alt="source code" className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
                <div className="lg:hidden absolute inset-0 flex justify-end mt-3 mx-16 card-img_hover">
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(repoURL, "_blank")
                    }}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
                  >
                    <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">{projects[currProject].name}</h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projects[currProject].technologies.map((tech, i) => (
                      <span className={`${colors[i % colors.length]}`}>#{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  <button
                    className="font-semibold underline hover:opacity-75 transition-opacity duration-300"
                    onClick={() => window.open(projects[currProject].demoURL, "_blank")}
                  >
                    Demo
                  </button>
                  <button
                    className="font-semibold underline hover:opacity-75 transition-opacity duration-300"
                    onClick={() => window.open(projects[currProject].repoURL, "_blank")}
                  >
                    Repository
                  </button>
                </div>
              </div>
            </div>
            <div
              className="[&>p]:indent-2 [&>ul]:list-disc [&>ul]:list-inside space-y-2 text-sm mt-6"
              dangerouslySetInnerHTML={{ __html: projects[currProject].description }}
            ></div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
}

export default ProjectModel
