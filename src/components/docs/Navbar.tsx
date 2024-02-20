"use client"

import React, { useState } from "react"
import Input from "../input/Input"
import {
  IconCommand,
  IconBrandGithub,
  IconMoon,
  IconHome,
} from "@tabler/icons-react"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const links = [
    {
      icon: (
        <IconHome
          size={20}
          className="text-white/50 hover:text-white/80 transition-colors duration-200 cursor-pointer"
        />
      ),
      action: () => router.push("/"),
    },
    {
      icon: (
        <IconBrandGithub
          size={20}
          className="text-white/50 hover:text-white/80 transition-colors duration-200 cursor-pointer"
        />
      ),
      action: () => router.push("https://github.com/Tintaa307/CSSX"),
    },
    {
      icon: (
        <IconMoon
          size={20}
          className="text-white/50 hover:text-white/80 transition-colors duration-200 cursor-pointer"
        />
      ),
      action: () => console.log("dark mode"),
    },
  ]

  return (
    <nav className="w-full h-14 bg-[#050505] flex items-center justify-center border-b-[1px] border-white/30">
      <div className="w-[57%] h-full flex items-center justify-between">
        <div className="relative w-max h-full flex items-center justify-center">
          <Input
            type="text"
            state={search}
            setState={setSearch}
            label=""
            className="w-[300px] h-[35px] text-sm"
            placeholder="Search docs..."
          />
          <kbd className="absolute top-[18.4px] right-2 w-12 h-6 rounded-md bg-white/10 text-white/60 flex flex-row justify-center items-center">
            <IconCommand
              size={19}
              className="text-white/60 group-hover:animate-wiggle"
            />
            <small className="text-base">K</small>
          </kbd>
        </div>
        <ul className="w-max h-full flex items-center justify-center flex-row gap-7">
          {links.map((link, i) => (
            <li onClick={link.action} key={i} className="">
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
