"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { firstLetterToUpperCase } from "@/libs/utils"

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="w-full h-max flex items-center justify-start">
      <small className="text-white/90 text-sm flex flex-row gap-2 mt-6">
        <span className="text-white/70">Docs</span>{" "}
        <span className="text-white/70">{">"}</span>{" "}
        {pathname.split("/")[3] === "getting-started"
          ? "Getting Started"
          : firstLetterToUpperCase(pathname.split("/")[3])}
      </small>
    </header>
  )
}

export default Header
