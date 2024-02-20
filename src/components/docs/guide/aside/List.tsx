"use client"

import React, { useEffect, useState } from "react"
import Line from "../line/Line"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/libs/utils"

const List = () => {
  const docsList = [
    {
      title: "Getting started",
      route: "/docs/guide/getting-started",
    },
    {
      title: "Introduction",
      route: "/docs/guide/introduction",
    },
    {
      title: "Installation",
      route: "/docs/guide/installation",
    },
    {
      title: "Theming",
      route: "/docs/guide/theming",
    },
    {
      title: "Changelog",
      route: "/docs/guide/changelog",
    },
  ]

  const componentsList = [
    {
      title: "Text",
      route: "/docs/guide/components/text",
    },
    {
      title: "Buttons",
      route: "/docs/guide/components/buttons",
    },
    {
      title: "Objects",
      route: "/docs/guide/components/objects",
    },
    {
      title: "Forms",
      route: "/docs/guide/components/forms",
    },
    {
      title: "Layout",
      route: "/docs/guide/components/layout",
    },
    {
      title: "Navigation",
      route: "/docs/guide/components/navigation",
    },
    {
      title: "Data Display",
      route: "/docs/guide/components/data-display",
    },
  ]

  const shapesList = [
    {
      title: "Cube",
      route: "/docs/guide/components/cube",
    },
    {
      title: "Sphere",
      route: "/docs/guide/components/sphere",
    },
    {
      title: "Cylinder",
      route: "/docs/guide/components/cylinder",
    },
    {
      title: "Cone",
      route: "/docs/guide/components/cone",
    },
    {
      title: "Plane",
      route: "/docs/guide/components/plane",
    },
    {
      title: "Torus",
      route: "/docs/guide/components/torus",
    },
  ]

  const [active, setActive] = useState("")

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const item = pathname.split("/")
    setActive(item[3])
  }, [pathname])

  return (
    <ul className="w-[70%] h-max flex items-start justify-center flex-col gap-4">
      {docsList.map((doc, i) => (
        <li
          key={i}
          onClick={() => router.push(doc.route)}
          className={cn(
            "flex text-white/60 text-sm font-normal cursor-pointer hover:text-white/90 transition-colors duration-200",
            {
              "text-white/90": active === doc.route.split("/")[3],
            }
          )}
        >
          {doc.title}
        </li>
      ))}
      <Line />
      <small className="text-white/80 font-normal text-base mb-2">
        Components
      </small>
      {componentsList.map((component, i) => (
        <li
          key={i}
          onClick={() => router.push(component.route)}
          className={cn(
            "flex text-white/60 text-sm font-normal cursor-pointer hover:text-white/90 transition-colors duration-200",
            {
              "text-white/90": active === component.route.split("/")[4],
            }
          )}
        >
          {component.title}
        </li>
      ))}
      <Line />
      <small className="text-white/80 font-normal text-base mb-2">Shapes</small>
      {shapesList.map((shape, i) => (
        <li
          key={i}
          onClick={() => router.push(shape.route)}
          className={cn(
            "flex text-white/60 text-sm font-normal cursor-pointer hover:text-white/90 transition-colors duration-200",
            {
              "text-white/90": active === shape.route.split("/")[4],
            }
          )}
        >
          {shape.title}
        </li>
      ))}
    </ul>
  )
}

export default List
