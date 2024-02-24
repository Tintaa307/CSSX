"use client"

import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Separator from "@/components/separator/Separator"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"
import React, { useState } from "react"
import OauthSection from "../sign-in/OauthSection"
import Agreements from "@/components/agreements/Agreements"
import { cn } from "@/libs/utils"

const SignUp = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(fullname, email, password)
  }

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col ">
      <div className="w-full h-max flex items-center justify-center flex-col gap-6">
        <div className="w-[30%] h-max flex items-start justify-center flex-col gap-3">
          <h1 className="text-white text-3xl font-semibold">Register here</h1>
          <p className="text-gray-400/50 text-sm text-normal">
            Create a new account to get started
          </p>
          <p className="text-white/60 text-sm font-normal">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-white/80 underline">
              Sign in
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[30%] h-max flex items-center justify-center flex-col"
        >
          <Input
            state={fullname}
            setState={setFullname}
            label="Fullname"
            type="text"
            placeholder="John Doe"
          />
          <Input
            state={email}
            setState={setEmail}
            label="Email"
            type="email"
            placeholder="johndoe@example.com"
          />
          <Input
            state={password}
            setState={setPassword}
            label="Password"
            type="password"
            placeholder="●●●●●●●●"
          />
          <Button
            text="Sign up"
            className="hover:gap-3 transition-all duration-150"
          >
            <IconArrowNarrowRight size={22} />
          </Button>
        </form>
        <Separator />
        <OauthSection />
        <Agreements />
      </div>
    </section>
  )
}

export default SignUp
