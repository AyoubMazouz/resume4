import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { fullName, githubURL, linkedinURL, navLinks } from "../constants"
import { logo, menu, close, github, linkedin } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <button
            className="flex items-center gap-2"
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              {fullName[0]} &nbsp;
              <span className="sm:block hidden"> | {fullName[1]}</span>
            </p>
          </button>
          <div className="flex gap-2">
            <motion.button
              onClick={() => {
                window.open(githubURL, "_blank")
              }}
              whileHover={{
                scale: 0.9,
                opacity: 0.75,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
              className="rounded-lg hover:bg-white/10 p-2 font-semibold"
            >
              <img src={github} alt="github" className="w-8 h-8 object-contain" />
            </motion.button>
            <motion.button
              onClick={() => {
                window.open(linkedinURL, "_blank")
              }}
              whileHover={{
                scale: 0.9,
                opacity: 0.75,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
              className="rounded-lg hover:bg-white/10 p-2 font-semibold"
            >
              <img src={linkedin} alt="github" className="w-8 h-8 object-contain" />
            </motion.button>
          </div>
        </div>

        <ul className="list-none hidden items-center sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <motion.a
              href="MazouzAyoub.pdf"
              download
              whileHover={{
                scale: 0.9,
                opacity: 0.75,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
              className="rounded-lg bg-accent hover:bg-transparent hover:border-2 hover:border-accent py-1.5 px-6 tracking-widest"
            >
              RESUME
            </motion.a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
