import React from "react"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { Icon } from "@iconify/react"

const options = {
  reverse: false,
  max: 45,
  perspective: 1000,
  scale: 1,
  speed: 5000,
}

const Tech = () => {
  const [hovered, setHovered] = React.useState(null)

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech, index) =>
        tech?.name ? (
          <Tilt options={options} className="w-16 h-16">
            <motion.div
              variants={fadeIn("bottom", "spring", index * 0.1, 0.5)}
              className="group flex justify-center items-center h-full w-full"
            >
              <div className="absolute -z-10 bottom-[105%] right-[50%] translate-x-[50%] bg-tertiary px-4 py-1.5 text-white text-sm whitespace-nowrap rounded-xl shadow-xl opacity-0 transition-y-[100%] group-hover:opacity-100 group-hover:transition-y-[0%] transition-all duration-1000">
                {tech.name}
              </div>
              <Icon icon={tech.icon} width={tech?.scale ?? 96} className={tech.class} />
            </motion.div>
          </Tilt>
        ) : (
          <div className="h-16 w-16"></div>
        ),
      )}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")
