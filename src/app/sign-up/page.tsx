"use client"

import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Separator from "@/components/separator/Separator"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"
import React, { useState } from "react"
import OauthSection from "../sign-in/OauthSection"
import Agreements from "@/components/agreements/Agreements"
import { useMutation } from "react-query"
import { SignUpProps } from "@/types/types"
import { createUser } from "@/libs/controllers/user"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { v4 as uuidv4 } from "uuid"

const SignUp = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const createUserMutation = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (values: SignUpProps) => {
      await createUser({
        name: values.name,
        email: values.email,
        password: values.password,
        user_id: uuidv4(),
      })
    },
    onSuccess: () => {
      toast.success("Usuario creado!")
      router.push("/sign-in")
    },
    onError: () => {
      toast.error("Error al crear el usuario")
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const values = Object.fromEntries(formData.entries()) as SignUpProps
      await createUserMutation.mutateAsync(values)
    } catch (error) {
      console.log("error")
      toast.error("Algo salio mal")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col ">
      <Toaster richColors position="top-center" duration={3000} />
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
          autoComplete="off"
          className="w-[30%] h-max flex items-center justify-center flex-col"
        >
          <Input label="Name" type="text" placeholder="John Doe" />
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
