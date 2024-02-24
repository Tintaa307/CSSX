"use client"

import Card from "@/components/card/Card"
import Title from "@/components/title/Title"
import { FollowerPointerCard } from "@/components/ui/FollowingPointer"
import React from "react"
import { SparklesPreview } from "./Sparkles"
import { GridBackgroundDemo } from "@/components/ui/GridBg"

{
  /* <Title text="Our team" className="text-4xl font-medium mt-12" />
      <main className="w-full h-max flex items-center justify-center flex-row gap-16">
        {developers.map((developer, index) => (
          <FollowerPointerCard
            className="relative w-max h-max"
            title={developer}
            key={index}
          >
            <Card />
          </FollowerPointerCard>
        ))}
      </main> */
}

const About = () => {
  const developers = ["Valentin Gonzalez", "Ariel Alzogaray Flores"]
  return (
    <section
      className={[
        "w-full mt-[74px] flex items-center justify-start flex-col gap-12",
        "main-height",
      ].join(" ")}
    >
      <GridBackgroundDemo className="w-full h-max">
        <SparklesPreview />
      </GridBackgroundDemo>
    </section>
  )
}

export default About
