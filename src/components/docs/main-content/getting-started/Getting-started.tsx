import React from "react"
import Header from "../header/Header"
import Title from "@/components/title/Title"

const GettingStarted = () => {
  return (
    <section className="w-[80%] h-full flex items-start justify-start flex-col gap-7">
      <Header />
      <div className="w-full h-max flex items-start justify-start flex-col gap-4">
        <Title text="Getting started" className="text-4xl font-semibold" />
        <p className="text-white/60 text-base font-normal">
          Learn the basics of cssx and how to integrate it into your project.
        </p>
      </div>
    </section>
  )
}

export default GettingStarted
