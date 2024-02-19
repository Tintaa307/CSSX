import { IconBrandReact, IconClipboardText } from "@tabler/icons-react"
import React from "react"

const ConsoleHeader = ({ fileName }: { fileName: string }) => {
  return (
    <nav className="w-full h-14 bg-[#080808] flex justify-between items-center border-b-[1px] border-b-white/10 rounded-t-3xl">
      <small className="text-white/60 text-sm font-normal flex items-center flex-row gap-1 mx-20">
        <IconBrandReact size={18} className="text-blue-600" />
        {fileName}
      </small>
      <IconClipboardText
        size={20}
        className="text-white/90 mx-20 cursor-pointer"
      />
    </nav>
  )
}

export default ConsoleHeader
