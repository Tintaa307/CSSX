import React from "react"
import Aside from "@/components/docs/guide/aside/Aside"
import GettingStarted from "@/components/docs/main-content/getting-started/Getting-started"
import Introduction from "@/components/docs/main-content/introduction/Introduction"
import Installation from "@/components/docs/main-content/installation/Installation"
import Navbar from "@/components/docs/Navbar"

const Guide = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center flex-row">
        <Aside />
        <main
          className={[
            "w-full flex items-center justify-center overflow-y-scroll",
            "h-fast",
          ].join(" ")}
        >
          {params.slug === "getting-started" && <GettingStarted />}
          {params.slug === "introduction" && <Introduction />}
          {params.slug === "installation" && <Installation />}
        </main>
      </div>
    </div>
  )
}

export default Guide
