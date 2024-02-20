import React from "react"
import Header from "../header/Header"
import Title from "@/components/title/Title"

const Introduction = () => {
  return (
    <section className="w-[80%] h-full flex items-start justify-start flex-col gap-7">
      <Header />
      <div className="w-full h-max flex items-start justify-start flex-col gap-4">
        <Title text="Introduction" className="text-4xl font-semibold" />
        <p className="text-white/60 text-base font-normal w-2/3">
          Beautifully designed 3D components that you can import and use in your
          projects. CSSX is a powerful and modern CSS framework that helps you
          to build stunning 3D interfaces using React components. Its so easy to
          use and customize.
        </p>
      </div>
    </section>
  )
}

export default Introduction
