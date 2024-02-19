"use client"

import React from "react"
import Title from "../title/Title"
import Social from "./Social"
import Information from "./Information"

const Footer = () => {
  return (
    <footer className="w-screen min-h-[70dvh] flex items-center justify-evenly bg-footer-gradient flex-row">
      <Social />
      <Information />
    </footer>
  )
}

export default Footer
