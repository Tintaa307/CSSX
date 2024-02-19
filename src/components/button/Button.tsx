"use client"

import { cn } from "@/libs/utils"
import React from "react"
import Loader from "../loader/Loader"

type ButtonProps = {
  text: string
  action?: () => void
  className?: string
  children?: React.ReactNode
  isLoading?: boolean
}

const Button = ({
  text,
  children,
  action,
  className,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={cn(
        "w-full h-[50px] flex items-center justify-center flex-row gap-2 rounded-md bg-black/40 border-[1px] border-white/15 text-white/80 text-base font-normal outline-none hover:bg-black/30 transition-colors duration-150 my-4",
        className
      )}
    >
      {isLoading ? <Loader /> : null}
      {isLoading ? null : text}
      {isLoading ? null : children}
    </button>
  )
}

export default Button
