import React from "react"
import Header from "../header/Header"
import Title from "@/components/title/Title"
import Card from "./Card"
import {
  IconBrandNextjs,
  IconBrandVite,
  IconBrandVue,
  IconCode,
} from "@tabler/icons-react"
import { RiRemixRunFill } from "@remixicon/react"
import { AstroIcon } from "./AstroIcon"

const Installation = () => {
  const frameworks = [
    {
      icon: (
        <IconBrandNextjs
          size={65}
          className="text-white/80 group-hover:animate-wiggle"
        />
      ),
      title: "Next.js",
    },
    {
      icon: (
        <IconBrandVite
          size={65}
          className="text-white/80 group-hover:animate-wiggle"
        />
      ),
      title: "Vite",
    },
    {
      icon: (
        <IconBrandVue
          size={65}
          className="text-white/80 group-hover:animate-wiggle"
        />
      ),
      title: "Vue",
    },
    {
      icon: (
        <RiRemixRunFill
          size={65}
          className="text-white/80 group-hover:animate-wiggle"
        />
      ),
      title: "Remix",
    },
    {
      icon: <AstroIcon />,
      title: "Astro",
    },
    {
      icon: (
        <IconCode
          size={65}
          className="text-white/80 group-hover:animate-wiggle"
        />
      ),
      title: "Manual Installation",
    },
  ]
  return (
    <section className="w-[80%] h-full flex items-start justify-start flex-col gap-7">
      <Header />
      <div className="w-full h-max flex items-start justify-start flex-col gap-4">
        <Title text="Installation" className="text-4xl font-semibold" />
        <p className="text-white/60 text-base font-normal w-2/3">
          Here is how you can install cssx in your project.
        </p>
      </div>
      <main className="w-[80%] h-full grid grid-cols-2 gap-7 place-items-center">
        {frameworks.map((framework, index) => (
          <Card key={index} icon={framework.icon} title={framework.title} />
        ))}
      </main>
    </section>
  )
}

export default Installation
