import Button from "@/components/button/Button"
import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react"
import React from "react"

const OauthSection = () => {
  return (
    <div className="w-[30%] h-max flex items-center justify-center flex-col my-2">
      <div className="w-full flex items-center justify-center flex-row gap-2">
        <Button
          text="Sign in with Github"
          className="my-0 flex-row-reverse group"
        >
          <IconBrandGithub
            className="group-hover:animate-wiggle transition-all duration-100"
            size={20}
          />
        </Button>
        <Button
          text="Sign in with Google"
          className="my-0 flex-row-reverse group"
        >
          <IconBrandGoogleFilled
            className="group-hover:animate-wiggle transition-all duration-100"
            size={20}
          />
        </Button>
      </div>
      <Button text="Sign in with SSO" className="hover:animate-shine" />
    </div>
  )
}

export default OauthSection
