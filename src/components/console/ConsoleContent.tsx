import { cn } from "@/libs/utils"
import React from "react"

const ConsoleContent = () => {
  const lines = [
    {
      lineNumber: 1,
      code: [
        {
          color: "text-violet-400",
          text: "import",
        },
        {
          color: "text-orange-300",
          text: "{",
        },
        {
          color: "text-red-400",
          text: "CSSX",
        },
        {
          color: "text-orange-300",
          text: "}",
        },
        {
          color: "text-violet-400",
          text: "from",
        },
        {
          color: "text-green-300",
          text: "'cssx'",
        },
      ],
    },
    {
      lineNumber: 2,
      code: [
        {
          color: "text-violet-400",
          text: "import",
        },
        {
          color: "text-orange-300",
          text: "{",
        },
        {
          color: "text-red-400",
          text: "Model3D",
        },
        {
          color: "text-orange-300",
          text: "}",
        },
        {
          color: "text-violet-400",
          text: "from",
        },
        {
          color: "text-green-300",
          text: "'cssx/models'",
        },
      ],
    },
    {
      lineNumber: 3,
      code: [],
    },
    {
      lineNumber: 4,
      code: [
        {
          color: "text-violet-400",
          text: "const",
        },
        {
          color: "text-blue-400",
          text: "App",
        },
        {
          color: "text-blue-400",
          text: "=",
        },
        {
          color: "text-orange-300",
          text: "()",
        },
        {
          color: "text-violet-400",
          text: "=>",
        },
        {
          color: "text-orange-300",
          text: "{",
        },
      ],
    },
    {
      lineNumber: 5,
      code: [
        {
          color: "text-violet-400",
          text: "return",
        },
        {
          color: "text-violet-400",
          text: "(",
        },
      ],
    },
    {
      lineNumber: 6,
      code: [
        {
          color: "text-gray-500",
          text: "<",
        },
        {
          color: "text-yellow-200",
          text: "CSSX",
        },
        {
          color: "text-orange-300",
          text: "model",
        },
        {
          color: "text-blue-400",
          text: "=",
        },
        {
          color: "text-blue-400",
          text: "{",
        },
        {
          color: "text-orange-300",
          text: "Model3D",
        },
        {
          color: "text-blue-400",
          text: "}",
        },
        {
          color: "text-gray-500",
          text: "/>",
        },
      ],
    },
    {
      lineNumber: 7,
      code: [
        {
          color: "text-violet-400",
          text: ")",
        },
      ],
    },
    {
      lineNumber: 8,
      code: [
        {
          color: "text-orange-300",
          text: "}",
        },
      ],
    },
    {
      lineNumber: 9,
      code: [],
    },
    {
      lineNumber: 10,
      code: [
        {
          color: "text-violet-400",
          text: "export",
        },
        {
          color: "text-violet-400",
          text: "default",
        },
        {
          color: "text-blue-400",
          text: "App",
        },
      ],
    },
    {
      lineNumber: 11,
      code: [],
    },
  ]

  return (
    <main className="w-full h-max flex items-start justify-start flex-col ">
      <div className="w-full h-8 flex items-center justify-start flex-row"></div>
      {lines.map((line, index) => (
        <div
          key={index}
          className={cn(
            "w-full h-8 my-1 flex items-center justify-start flex-row",
            {
              "gap-3": line.lineNumber === 5 || line.lineNumber === 7,
              "gap-8": line.lineNumber === 6,
            }
          )}
        >
          <span className="text-white/40 text-xs mx-6">
            <span>{line.lineNumber}</span>
          </span>
          <pre className={"text-white/60 text-sm"}>
            {line.code.map((code, index) => (
              <span
                key={index}
                className={cn(code.color, {
                  "mx-1": line.lineNumber !== 6,
                  "ml-2":
                    (line.lineNumber === 6 && code.text === "model") ||
                    code.text === "/>",
                })}
              >
                {code.text}
              </span>
            ))}
          </pre>
        </div>
      ))}
    </main>
  )
}

export default ConsoleContent
