import React from "react"

const Separator = () => {
  return (
    <div className="w-[30%] h-max flex items-center justify-evenly flex-row gap-3">
      <div className="w-4/5 h-[1px] bg-white/30" />
      <small className="w-1/6 flex items-center justify-center text-white/70 text-base font-normal">
        or
      </small>
      <div className="w-4/5 h-[1px] bg-white/30" />
    </div>
  )
}

export default Separator
