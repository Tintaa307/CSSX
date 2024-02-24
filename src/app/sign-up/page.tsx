import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Separator from "@/components/separator/Separator"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"
import OauthSection from "../sign-in/OauthSection"
import Agreements from "@/components/agreements/Agreements"

type SignUpProps = {
  fullname: string
  email: string
  password: string
}

const SignUp = () => {
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
          autoComplete="off"
          className="w-[30%] h-max flex items-center justify-center flex-col"
        >
          <Input label="Fullname" type="text" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="johndoe@example.com" />
          <Input label="Password" type="password" placeholder="●●●●●●●●" />
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
