import { cn } from "@/libs/utils"
import React from "react"

const Title = ({
  text,
  className,
  children,
}: {
  text?: string
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <h1
      className={cn(
        "bg-clip-text text-transparent bg-text-gradient",
        className
      )}
    >
      {text}
      {children}
    </h1>
  )
}

export default Title
