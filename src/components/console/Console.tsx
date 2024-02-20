import { IconBrandGithub } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"
import ConsoleHeader from "./ConsoleHeader"
import ConsoleContent from "./ConsoleContent"

const Console = () => {
  return (
    <div className="relative w-full h-max bg-box-gradient opacity-0 border-[1px] mb-6 border-white/10 rounded-3xl flex justify-start items-center flex-col animate-fadeIn animation-delay-200">
      <ConsoleHeader fileName="page.tsx" />
      <ConsoleContent />
      <footer className="w-full h-14 flex items-center justify-start mt-8 rounded-b-3xl bg-[#080808] border-t-[1px] border-white/10">
        <Link
          href={"https://github.com/Tintaa307/CSSX"}
          className="text-white/70 bg-[#060606] py-[9px] px-3 shadow-[0_0_2px_#f2f2f2] rounded-3xl text-xs flex items-center flex-row gap-2 mx-12 hover:text-white transition-colors duration-150"
        >
          View on github <IconBrandGithub size={16} />
        </Link>
      </footer>
    </div>
  )
}

export default Console
