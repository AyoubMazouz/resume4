import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { emailAddress, fullName, phoneNumber } from "../constants"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (form.name.trim(" ") === "") return alert("Please fill in your name.")
    if (form.email.trim(" ") === "") return alert("Please fill in your email.")
    if (form.message.trim(" ") === "") return alert("Please write a message.")

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: fullName.join(" "),
          from_email: form.email,
          to_email: emailAddress,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Something went wrong. Please try again!")
        },
      )
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <h3 className={styles.sectionHeadText}>Get in touch!</h3>

        <div>
          <p className="text-white/75">{phoneNumber}</p>
          <p className="text-white/75">{emailAddress}</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you would like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <motion.button
            href="MazouzAyoub.pdf"
            type="submit"
            whileHover={{
              scale: 0.98,
              opacity: 0.75,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-accent hover:bg-transparent hover:border-2 hover:border-accent py-1.5 px-6 tracking-widest"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
