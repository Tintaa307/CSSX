import React from "react"

const Card = ({ title, icon }: { title: string; icon: React.JSX.Element }) => {
  return (
    <article className="w-full h-[250px] flex items-center justify-center flex-col gap-2 bg-linear-gradient-top-left-short border-[1px] border-white/30 rounded-3xl cursor-pointer group hover:border-white/80 transition-all duration-200 mb-2">
      {icon}
      <span className="text-white/70 text-base font-normal">{title}</span>
    </article>
  )
}

export default Card
