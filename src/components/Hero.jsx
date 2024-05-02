import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { fullName } from "../constants"
import { AnimatedText } from "./AnimatedText"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-[30rem] h-60 violet-gradient" />
        </div>

        <div>
          <h1 className={`font-black text-white text-5xl md:text-6xl lg:text-8xl tracking-wide mt-16 md:mt-28 flex`}>
            <AnimatedText text={`Hi, I'm ${fullName[1]}`} changeColorAt={20} />
          </h1>
          <p className={`text-sm sm:text-lg lg:text-xl xl:text-2xl mt-6 text-secondary max-w-[45ch]`}>
            <AnimatedText
              text="Self-taught developer since 2018. I craft optimized, scalable apps with focus for efficiency and user Experience."
              delay={0.4}
            />
          </p>
          <div className="flex gap-4 flex-wrap mt-8">
            <button className="rounded-lg bg-accent hover:bg-transparent hover:ring-2 hover:ring-accent py-2.5 px-8 tracking-widest text-lg">
              Get In Touch
            </button>
            <button className="rounded-lg hover:bg-accent ring-2 ring-accent py-2.5 px-8 tracking-widest text-lg">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-6 md:bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
