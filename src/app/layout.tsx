import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

const inter = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cssx",
  description:
    "A powerful and modern 3D CSS framework that helps you to build a website faster and easier. It is a set of CSS styles that are easy to use and customize.",
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
