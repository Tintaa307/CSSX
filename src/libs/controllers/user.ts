import axios from "axios"
import { SignUpProps } from "@/types/types"

const userAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://cssx.vercel.app/api/auth/"
      : "http://localhost:3000/api/auth/",
})

export const createUser = async (user: SignUpProps) => {
  userAPI.post("/register", user)
}
