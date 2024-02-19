import React from "react"

const Loader = () => {
  return (
    <div className="w-[300px] h-[100px] flex items-center justify-center">
      <div className="w-[5px] h-[18px] mx-[5px] bg-black/80 shadow-[0_0_8px_#FFF] rounded-[5px] animate-wave"></div>
      <div className="w-[5px] h-[18px] mx-[5px] bg-black/80 shadow-[0_0_8px_#FFF] rounded-[5px] animate-wave animation-delay-100"></div>
      <div className="w-[5px] h-[18px] mx-[5px] bg-black/80 shadow-[0_0_8px_#FFF] rounded-[5px] animate-wave animation-delay-200"></div>
      <div className="w-[5px] h-[18px] mx-[5px] bg-black/80 shadow-[0_0_8px_#FFF] rounded-[5px] animate-wave animation-delay-300"></div>
    </div>
  )
}

export default Loader
