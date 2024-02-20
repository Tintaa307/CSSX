"use client"

import React from "react"
import Logo from "../logo/Logo"
import Button from "../button/Button"
import { IconLogin } from "@tabler/icons-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

const Navbar = () => {
  const router = useRouter()
  const navItems = ["About", "Blog", "Pricing", "Features", "Contact"]
  const pathname = usePathname()
  return (
    <>
      {pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname.includes("guide") ? null : (
        <header className="fixed top-0 left-0 w-full h-[74px] flex items-center justify-center border-b-[1px] border-b-white/20 z-40 backdrop-blur-sm">
          <nav className="w-[77%] h-full flex justify-evenly items-center">
            <Logo />
            <ul className="w-2/4 h-full flex items-center justify-center gap-14">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white/70 hover:text-white transition-colors duration-150 cursor-pointer text-[17px] font-normal"
                >
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <div className="w-1/4 flex justify-center items-center flex-row gap-3">
              <Button
                action={() => router.push("/sign-in")}
                text="Sign in"
                className="group"
              >
                <IconLogin size={22} className="group-hover:animate-wiggle" />
              </Button>
              <Button
                text="Sign up"
                action={() => router.push("/sign-up")}
                className="group bg-transparent hover:bg-transparent border-none hover:underline"
              />
            </div>
          </nav>
        </header>
      )}
    </>
  )
}

export default Navbar
