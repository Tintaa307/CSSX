import React from "react"
import Title from "@/components/title/Title"
import List from "./List"

const Aside = () => {
  return (
    <aside
      className={[
        "w-[25%] flex items-center justify-start flex-col gap-8 border-r-[1px] border-white/40",
        "h-fast",
      ].join(" ")}
    >
      <div className="w-[70%] h-max flex items-center justify-start">
        <Title text="cssx docs" className="text-3xl font-normal mt-6" />
      </div>
      <List />
    </aside>
  )
}

export default Aside
