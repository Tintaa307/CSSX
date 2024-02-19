import { NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
  }
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      )
    }

    console.log(email, password)

    const resend = new Resend(process.env.RESEND_API_KEY!)

    resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Welcome to my project!",
        react: EmailTemplate({ fistName: "Tintaa" }),
        text: "",
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })

    return NextResponse.json({ message: "Email sent" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
