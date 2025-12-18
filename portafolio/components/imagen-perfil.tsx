"use client"
import { MotionTransition } from "./transition-component"

import Image from "next/image"

const AvatarPortfolio = () => {
  return (
    <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute">
      <Image src="/imagen definitiva.png" width="300" height="300" className="w-full h-full" alt="Particles"/>
    </MotionTransition>
  )
}

export default AvatarPortfolio
