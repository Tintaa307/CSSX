import Image from "next/image"
import React from "react"

const CSSX = () => {
  return (
    <picture className="w-full h-max flex items-center justify-center my-24">
      <Image
        src={"/apple-touch-icon.png"}
        alt="CSSX-image"
        width={160}
        height={160}
        className="drop-shadow-[0_4px_10px_#FFF]"
      />
    </picture>
  )
}

export default CSSX
