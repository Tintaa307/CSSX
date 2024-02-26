import { PrismaClient } from "@prisma/client"

declare global {
  namespace globalThis {
    var prismadb: PrismaClient
  }
}

export type SignUpProps = {
  name: string
  email: string
  password: string
  user_id: string
}
