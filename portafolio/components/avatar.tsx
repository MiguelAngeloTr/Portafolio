"use client"
import {MotionTransition} from "./transition-component"

import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
        <Image src="/avatar-1.png "width={350} height={350} alt="Avatar"/>
      
    </MotionTransition>
  );
}

export default Avatar
