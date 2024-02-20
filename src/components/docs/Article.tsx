"use client"

import React from "react"
import { useRouter } from "next/navigation"

const Article = ({
  list,
  title,
  description,
  route,
}: {
  list: string[]
  title: string
  description: string
  route: string
}) => {
  const router = useRouter()
  return (
    <article
      onClick={() => router.push(route)}
      className="w-[35%] h-[300px] bg-linear-gradient-top-left-short flex items-center justify-center rounded-xl border-[1px] border-white/20 hover:bg-linear-gradient-top-left-long cursor-pointer"
    >
      <div className="w-5/6 h-3/4 flex items-start justify-start flex-col gap-3">
        <h3 className="text-white/90 text-2xl font-normal">{title}</h3>
        <p className="text-white/60 text-sm font-normal">{description}</p>
        <ul className="mt-10">
          {list.map((item, i) => (
            <li
              key={i}
              className="text-white/60 my-4 text-base font-normal cursor-pointer "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Article
