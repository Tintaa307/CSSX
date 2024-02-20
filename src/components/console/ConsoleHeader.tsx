import { cn } from "@/libs/utils"
import {
  IconBrandReact,
  IconClipboardText,
  IconClipboardCheck,
} from "@tabler/icons-react"
import React, { useEffect, useState } from "react"
import { toast } from "sonner"

const ConsoleHeader = ({ fileName }: { fileName: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }, [isCopied])

  return (
    <nav className="w-full h-14 bg-[#080808] flex justify-between items-center border-b-[1px] border-b-white/10 rounded-t-3xl">
      <small className="text-white/60 text-sm font-normal flex items-center flex-row gap-1 mx-14">
        <IconBrandReact size={18} className="text-blue-600" />
        {fileName}
      </small>
      <IconClipboardText
        size={20}
        className={cn(
          "text-white/90 mx-14 cursor-pointer hover:animate-wiggle",
          {
            hidden: isCopied,
          }
        )}
        onClick={() => {
          setIsCopied(true)
          toast.success("Copied to clipboard")
        }}
      />
      <IconClipboardCheck
        size={20}
        className={cn(
          "text-white/90 mx-14 hidden cursor-pointer hover:animate-wiggle",
          {
            block: isCopied,
          }
        )}
        onClick={() => setIsCopied(false)}
      />
    </nav>
  )
}

export default ConsoleHeader
