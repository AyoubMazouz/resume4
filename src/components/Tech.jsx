import React from "react"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { Icon } from "@iconify/react"
import { styles } from "../styles"

const options = {
  reverse: false,
  max: 45,
  perspective: 1000,
  scale: 1,
  speed: 5000,
}

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} `}>Familiar Technologies</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <div className="perspective-600 mt-40 grid items-center grid-cols-6 grid-rows-6 md:rotate-45 md:gap-6 lg:gap-12 justify-center overflow-hidden p-6">
        {technologies.map((tech, index) =>
          tech?.name ? (
            <Tilt key={tech.name} options={options} className="tech-grid-item w-16 h-16">
              <motion.div
                variants={fadeIn("bottom", "spring", index * 0.05, 0.5)}
                className="group flex justify-center items-center h-full w-full"
              >
                <div className="absolute bottom-[105%] right-[50%] translate-x-[50%] bg-tertiary px-4 py-1.5 text-white text-sm whitespace-nowrap rounded-xl shadow-xl opacity-0 transition-y-[100%] group-hover:opacity-100 group-hover:transition-y-[0%] transition-all duration-1000">
                  {tech.name}
                </div>
                <Icon
                  icon={tech.icon}
                  width={tech?.scale ? tech?.scale * 96 : 96}
                  className={`md:-rotate-45 scale-50 md:scale-75 lg:scale-100 ${tech.class}`}
                />
              </motion.div>
            </Tilt>
          ) : (
            <div className="h-16 w-16"></div>
          ),
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")
