"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"

const Social = () => {
  const socialMediaList = [
    {
      name: "GitHub",
      link: "",
      icon: (
        <IconBrandGithub
          size={18}
          className="text-white/50 group-hover:text-white/80 transition-all duration-150"
        />
      ),
    },
    {
      name: "Twitter",
      link: "",
      icon: (
        <IconBrandX
          size={18}
          className="text-white/50 group-hover:text-white/80 transition-all duration-150"
        />
      ),
    },
    {
      name: "Discord",
      link: "",
      icon: (
        <IconBrandDiscord
          size={18}
          className="text-white/50 group-hover:text-white/80 transition-all duration-150"
        />
      ),
    },
    {
      name: "Linkedin",
      link: "",
      icon: (
        <IconBrandLinkedin
          size={18}
          className="text-white/50 group-hover:text-white/80 transition-all duration-150"
        />
      ),
    },
  ]

  return (
    <section className="w-1/3 h-full flex items-center justify-center flex-col gap-3">
      <motion.small
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/50 text-xs font-normal"
      >
        Build it in Argentina with <span className="text-red-500">❤</span>{" "}
        <br />
        by Valentin Gonzalez and the CSSX team
      </motion.small>
      <motion.ul
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-[38%] h-max flex items-center justify-stretch flex-row gap-3"
      >
        {socialMediaList.map((socialMedia, index) => (
          <li
            key={index}
            className="w-8 h-8 flex items-center justify-center rounded-3xl bg-box-gradient border-[1px] border-white/30 group cursor-pointer"
          >
            {socialMedia.icon}
          </li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Social
