"use client"

import { cn } from "@/libs/utils"
import React from "react"

type InputProps = {
  label: string
  type: string
  className?: string
  placeholder?: string
  state: string
  setState: (state: string) => void
}

const Input = ({
  label,
  type,
  className,
  placeholder,
  state,
  setState,
}: InputProps) => {
  return (
    <div className="w-full my-4 flex justify-center items-start flex-col gap-1">
      <label htmlFor="email" className="text-white/80 font-normal text-base">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className={cn(
          "w-full h-[50px] rounded-md bg-black/35 border-[1px] border-white/20 text-white/80 px-4 text-base font-normal focus:border-white/40 outline-none focus:outline-2 focus:outline-white/20 ring-0 transition-all duration-150",
          className
        )}
      />
    </div>
  )
}

export default Input
