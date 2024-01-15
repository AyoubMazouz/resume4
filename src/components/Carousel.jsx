import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "react-use-measure"
import { useGlobalContext } from "../contexts/globalContext"
import { projects } from "../constants"
import { Icon } from "@iconify/react"

export default function Carousel() {
  const { currProject } = useGlobalContext()
  let [ref, { width }] = useMeasure()
  let [currImg, setCount] = useState(-1)
  let [direction, setDirection] = useState(1)

  function handlePrev() {
    if (currImg > -1) setCount(currImg - 1)
    setDirection(-1)
  }
  function handleNext() {
    if (currImg < projects[currProject].numOfImgs - 1) setCount(currImg + 1)
    setDirection(1)
  }

  return (
    <div className="flex w-full h-full rounded-xl overflow-hidden">
      <div className="aspect-video">
        <div ref={ref} className="relative flex h-full items-center justify-center overflow-hidden bg-tertiary">
          <motion.button
            whileHover={{
              scale: 0.9,
              opacity: 0.75,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
            onClick={handleNext}
            className="absolute z-10 top-[50%] translate-y-[-50%] right-2 rounded-lg hover:bg-secondary/50 p-2 font-semibold"
          >
            <Icon
              icon="teenyicons:right-outline"
              width="36"
              className={currImg < projects[currProject].numOfImgs - 1 ? "text-accent" : "text-secondary"}
            />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 0.9,
              opacity: 0.75,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
            onClick={handlePrev}
            className="absolute z-10 top-[50%] translate-y-[-50%] left-2 rounded-lg hover:bg-secondary/50 p-2 font-semibold"
          >
            <Icon
              icon="teenyicons:left-outline"
              width="36"
              className={currImg > -1 ? "text-accent" : "text-secondary"}
            />
          </motion.button>
          <AnimatePresence custom={{ direction, width }}>
            {currImg === -1 ? (
              <motion.div
                key={currImg}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{ direction, width }}
                className="absolute inset-0 rounded-xl overflow-hidden"
              >
                <iframe
                  title={projects[currProject].name}
                  src={`https://www.youtube.com/embed/${projects[currProject].videoId}?autoplay=1&mute=1`}
                  width="800"
                  height="450"
                  className="w-full h-full z-10"
                  allowFullScreen
                />
              </motion.div>
            ) : (
              <motion.div
                key={currImg}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{ direction, width }}
                className="absolute rounded-xl overflow-hidden"
              >
                <img
                  src={`/projects/${projects[currProject].name
                    .toLowerCase()
                    .replaceAll(" ", "-")}/${currImg}-1920.jpeg`}
                  alt={projects[currProject].name}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

let variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
}
