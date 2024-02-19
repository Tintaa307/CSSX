"use client"

import React from "react"
import { motion } from "framer-motion"
import Title from "../title/Title"

const Information = () => {
  const informationList = [
    {
      title: "Documentation",
      items: ["Getting started", "Examples", "API reference", "SDKs"],
    },
    {
      title: "Resources",
      items: ["Pricing", "Changelog"],
    },
    {
      title: "Company",
      items: ["Blog", "Contact", "Brand"],
    },
    {
      title: "Legal",
      items: ["Privacy policy", "Terms of service"],
    },
  ]
  return (
    <section className="w-2/3 h-full flex items-center justify-center">
      <motion.ul
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-[75%] h-full flex items-start justify-around flex-row"
      >
        {informationList.map((info, index) => (
          <li
            key={index}
            className="w-1/4 h-full flex items-start justify-center flex-col gap-3"
          >
            <Title text={info.title} className="text-lg font-semibold" />
            <ul className="w-full h-max flex items-start justify-start flex-col gap-3">
              {info.items.map((item, index) => (
                <li
                  key={index}
                  className="text-white/50 text-sm font-normal cursor-pointer hover:text-white/80 transition-all duration-150"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Information
