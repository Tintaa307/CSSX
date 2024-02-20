"use client"

import Button from "@/components/button/Button"
import Title from "@/components/title/Title"
import { IconArrowNarrowRight, IconBook2, IconBook } from "@tabler/icons-react"
import Console from "@/components/console/Console"
import Letter from "@/components/3D-object/Letter"
import LandingCube from "@/components/3D-object/LandingCube"
import { motion } from "framer-motion"
import { Toaster } from "sonner"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main className="relative w-screen min-h-[100dvh] flex items-center justify-center flex-col">
      <Toaster
        className="bg-[#060606] border-[1px] border-white/30 text-white/80"
        position="top-center"
        duration={3000}
      />
      <div className="relative w-screen h-screen mb-2 flex items-center justify-center flex-row">
        <section className="w-1/2 h-full flex items-center justify-center flex-col gap-2 opacity-0 animate-fadeRightIn">
          <Title className="font-bold text-5xl leading-snug">
            The most powerful 3D
            <br /> component library
          </Title>
          <p className="w-[53%] text-sm text-white/65 font-normal -ml-4">
            CSSX is a powerful and modern CSS framework that helps you to build
            stunning 3D interfaces using React components. Its so easy to use
            and customize.
          </p>
          <div className="w-[55%] h-max flex justify-center items-center flex-row gap-3">
            <Button
              text="Get started"
              className="hover:gap-3 hover:bg-black/25 transition-all duration-150"
            >
              <IconArrowNarrowRight size={22} className="" />
            </Button>
            <Button
              action={() => router.push("/docs")}
              text="Documentation"
              className="group"
            >
              <IconBook2
                size={22}
                className="group-hover:opacity-0 group-hover:animate-wiggle group-hover:hidden hover:bg-black/25 transition-opacity duration-150"
              />
              <IconBook
                size={22}
                className="opacity-0 hidden group-hover:opacity-100 group-hover:block group-hover:animate-wiggle transition-opacity duration-150"
              />
            </Button>
          </div>
        </section>
        <section className="w-1/2 h-max flex items-center justify-center mt-[74px]">
          <LandingCube />
        </section>
        <div className="w-full h-max flex items-center justify-center absolute bottom-14">
          <motion.small
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-sm font-normal"
          >
            Developed by{" "}
            <span className="py-1 px-2 mx-1 rounded-md bg-[#060606] shadow-[0_0_4px_#474747]">
              CSSX
            </span>{" "}
            team
          </motion.small>
        </div>
      </div>
      <section
        className={[
          "w-full h-full flex items-center justify-start flex-col",
          "",
        ].join(" ")}
      >
        <motion.main
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-1/2 h-max flex items-center justify-center flex-col gap-12 rounded-t-3xl bg-gradient-radial-top border-t-[1px] border-white/30 mt-24"
        >
          <div className="w-full h-max flex items-center justify-center flex-col gap-3">
            <div className="w-44 h-44 bg-box-gradient shadow-[0_0_5px_#f56f3cff] rounded-3xl mt-12">
              <Letter />
            </div>
            <Title
              className="text-4xl font-normal mt-12 animate-fadeIn opacity-0"
              text="3D React component library of the century"
            />
          </div>
          <Console />
        </motion.main>
      </section>
    </main>
  )
}
