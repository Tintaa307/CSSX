"use client"

import React from "react"
import Anta from "next/font/local"
import { useRouter } from "next/navigation"

const anta = Anta({ src: "./Anta-Regular.ttf" })

const Logo = () => {
  const router = useRouter()
  return (
    <div className="w-1/4 h-full flex items-center justify-start">
      <h3
        onClick={() => router.push("/")}
        className={[
          "text-white text-2xl font-semibold tracking-wider cursor-pointer",
          anta.className,
        ].join(" ")}
      >
        CSSX
      </h3>
    </div>
  )
}

export default Logo
