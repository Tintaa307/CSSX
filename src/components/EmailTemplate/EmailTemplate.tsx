import React from "react"

interface EmailTemplateProps {
  fistName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fistName,
}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4 bg-[#0a0a0a]">
      <h1 className="text-white/90 text-4xl font-semibold">
        Welcome to my project {fistName}!
      </h1>
      <p className="text-gray-500 text-base text-normal">
        Thank you for signing up to my project. We are excited to have you on
        board.
      </p>
      <a
        href="http://localhost:3000"
        className="text-blue-800 text-base underline"
      >
        Verify here
      </a>
    </div>
  )
}
