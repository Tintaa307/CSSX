import Link from "next/link"
import React from "react"

const Agreements = () => {
  return (
    <div className="w-[30%] h-max flex items-center justify-center">
      <small className="text-white/30">
        By signing in, you agree to our{" "}
        <Link href="#" className="text-blue-500">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-blue-500">
          Terms of Service
        </Link>
      </small>
    </div>
  )
}

export default Agreements
