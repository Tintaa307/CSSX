import Article from "@/components/docs/Article"
import Title from "@/components/title/Title"
import React from "react"

const Docs = () => {
  const gettingStartedList = ["Installation", "Usage", "Customization"]
  const componentsList = ["Text", "Buttons", "Objects"]

  return (
    <div
      className={[
        "w-full flex mt-[74px] items-center justify-start flex-col gap-16 ",
        "",
      ].join(" ")}
    >
      <div className="w-full flex items-center justify-center h-max flex-col gap-3">
        <Title text="Documentation" className="text-6xl font-normal mt-14" />
        <p className="text-white/40 text-lg font-normal">
          Learn how to get started with cssx and build beautiful UIs.
        </p>
      </div>
      <section className="w-full h-full flex items-center justify-center flex-row gap-12">
        <Article
          title="Getting Started"
          route="/docs/guide/getting-started"
          description="Learn the basics of cssx and how to integrate it into your project."
          list={gettingStartedList}
        />
        <Article
          title="Components"
          route="/docs/guide/components"
          description="Explore the different components available in cssx."
          list={componentsList}
        />
      </section>
    </div>
  )
}

export default Docs
