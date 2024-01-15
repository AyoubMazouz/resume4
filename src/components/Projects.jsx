import React from "react"
import Tilt from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { useGlobalContext } from "../contexts/globalContext"
import { colors } from "../constants"
import { Icon } from "@iconify/react"

const ProjectCard = ({ id, name, description, technologies, repoURL, demoURL }) => {
  const { setCurrProject } = useGlobalContext()
  return (
    <motion.button
      variants={fadeIn("up", "spring", id * 0.5, 0.75)}
      onClick={() => {
        setCurrProject(id)
        document.body.style.overflow = "hidden"
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  h-[460px] text-left "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={`/projects/${name.toLowerCase().replaceAll(" ", "-")}/0-1920.jpeg`}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation()
                window.open(demoURL, "_blank")
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
            >
              <Icon icon="icon-park-solid:play" width="32" className="text-white" />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end mt-3 mx-16 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation()
                window.open(repoURL, "_blank")
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:opacity-75 transition-all duration-300"
            >
              <Icon icon="eva:github-fill" width="32" className="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p
            className={`mt-2 text-secondary text-sm indent-2 line-clamp-3`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <p key={`${tech}${i}`} className={`text-sm ${colors[i % colors.length]}`}>
              #{tech}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.button>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex xl:justify-start justify-center flex-wrap gap-7">
        {projects.map((project, id) => (
          <ProjectCard key={project.name} id={id} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
