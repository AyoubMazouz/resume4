import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "../constants"
import { useGlobalContext } from "../contexts/globalContext"
import { colors } from "../constants"
import Carousel from "./Carousel"
import { Icon } from "@iconify/react"

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
            className="model-w relative bg-tertiary py-12 px-6 rounded-2xl shadow-xl max-h-[90vh] overflow-y-scroll lg:overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{
                scale: 0.9,
                opacity: 0.75,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrProject(null)}
              className="absolute top-4 right-4 rounded-lg hover:bg-secondary/50 p-2 font-semibold"
            >
              <Icon icon="icon-park-solid:close-one" width="32" className="text-secondary" />
            </motion.button>
            <div className="lg:flex gap-x-6">
              <div className="lg:hidden">
                <h1 className="text-2xl font-semibold">{projects[currProject].name}</h1>
                <div className="flex flex-wrap text-sm gap-y-1 gap-x-2  my-2">
                  {projects[currProject].technologies.map((tech, i) => (
                    <span className={`${colors[i % colors.length]}`}>#{tech}</span>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video w-full">
                <Carousel />
                <div className="lg:hidden absolute inset-0 flex justify-end m-3 card-img_hover">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(demoURL, "_blank")
                    }}
                    className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
                  >
                    <Icon icon="icon-park-solid:play" width="22" className="text-white" />
                  </button>
                </div>
                <div className="lg:hidden absolute inset-0 flex justify-end mt-3 mx-16 card-img_hover">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(repoURL, "_blank")
                    }}
                    className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
                  >
                    <Icon icon="eva:github-fill" width="22" className="text-white" />
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-semibold">{projects[currProject].name}</h1>
                  <div className="flex flex-wrap gap-2 mt-2 text-lg">
                    {projects[currProject].technologies.map((tech, i) => (
                      <span key={`${tech}${i}`} className={`${colors[i % colors.length]}`}>
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mb-6">
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
