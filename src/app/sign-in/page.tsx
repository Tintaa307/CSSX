"use client"

import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Separator from "@/components/separator/Separator"
import React, { useState } from "react"
import OauthSection from "./OauthSection"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"
import Agreements from "@/components/agreements/Agreements"
import axios from "axios"
import { cn } from "@/libs/utils"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (email && password) {
        await axios
          .post("/api/auth/login", {
            email,
            password,
          })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section
      className={cn(
        "w-full flex items-center justify-center flex-col mt-[74px]",
        "main-height"
      )}
    >
      <div className="w-full h-max flex items-center justify-center flex-col gap-6">
        <div className="w-[30%] h-max flex items-start justify-center flex-col gap-3">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <p className="text-gray-400/50 text-sm text-normal">
            Authenticate with your email and password
          </p>
          <p className="text-white/60 text-sm font-normal">
            Dont have any account?{" "}
            <Link href="/sign-up" className="text-white/80 underline">
              Sign up
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[30%] h-max flex items-center justify-center flex-col"
        >
          <Input
            state={email}
            setState={setEmail}
            label="Email"
            type="text"
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
            text="Sign in"
            className="hover:gap-3 transition-all duration-150"
          >
            <IconArrowNarrowRight size={22} />
          </Button>
          <div className="w-full h-max flex items-start justify-start">
            <Link
              href={"#"}
              className="text-white/60 underline text-sm font-normal hover:text-white/80 transition-colors duration-150"
            >
              Forgot your password?{" "}
            </Link>
          </div>
        </form>
        <Separator />
        <OauthSection />
        <Agreements />
      </div>
    </section>
  )
}

export default Login
