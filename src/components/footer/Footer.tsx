"use client"

import React from "react"
import Title from "../title/Title"
import Social from "./Social"
import Information from "./Information"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname.includes("guide") ||
      pathname === "/sign-in" ||
      pathname === "/sign-up" ? null : (
        <footer className="w-screen min-h-[70dvh] flex items-center justify-evenly bg-footer-gradient flex-row">
          <Social />
          <Information />
        </footer>
      )}
    </>
  )
}

export default Footer
