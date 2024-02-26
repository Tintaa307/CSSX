import { NextResponse } from "next/server"
import prismadb from "@/libs/db"

export async function POST(req: Request) {
  if (req.method !== "POST")
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 })

  try {
    const { name, email, password, user_id } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    await prismadb.users.create({
      data: {
        name: name,
        email: email,
        password: password,
        user_id: user_id,
      },
    })

    return NextResponse.json({ message: "Usuario creado" }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
