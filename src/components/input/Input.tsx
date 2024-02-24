"use client"

import { cn } from "@/libs/utils"
import React, { useEffect, useRef } from "react"

type InputProps = {
  label: string
  type: string
  className?: string
  placeholder?: string
  state?: string
  setState?: (state: string) => void
}

const Input = ({
  label,
  type,
  className,
  placeholder,
  state,
  setState,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault()

        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="w-full my-4 flex justify-center items-start flex-col gap-1">
      <label htmlFor="email" className="text-white/80 font-normal text-base">
        {label}
      </label>
      <input
        name={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
        value={state}
        ref={inputRef}
        onChange={(e) => {
          if (setState) {
            setState(e.target.value)
          }
        }}
        className={cn(
          "w-full h-[50px] rounded-md bg-black/35 border-[1px] border-white/20 text-white/80 px-4 text-base font-normal focus:border-white/40 outline-none focus:outline-2 focus:outline-white/20 ring-0 placeholder:text-white/60 placeholder:font-normal placeholder:text-sm transition-all duration-150",
          className
        )}
      />
    </div>
  )
}

export default Input
