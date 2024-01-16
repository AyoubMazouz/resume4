import React from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export const AnimatedText = ({ text, className, once = true, changeColorAt = 999999, delay = 0 }) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  useEffect(() => {
    const show = async () => {
      controls.start("visible")
      await controls.start("hidden")
      controls.start("visible")
    }

    if (isInView) show()
    else controls.start("hidden")
  }, [isInView])

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {textArray.map((line, li) => (
        <span className="block" key={`${line}-${li}`}>
          {line.split(" ").map((word, wi) => (
            <span className="inline-block" key={`${word}-${wi}`}>
              {word.split("").map((char, ci) => (
                <motion.span
                  key={`${char}-${ci}`}
                  className={`inline-block ${changeColorAt <= parseInt(`${li}${wi}${ci}`) ? "text-accent" : ""}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.1,
                        delay: delay + 0.01 * (li * 50 + wi * 10 + ci),
                      },
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  )
}
