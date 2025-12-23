"use client";
import { MotionTransition } from "./transition-component";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-5 hidden md:inline-block md:absolute bg-transparent"
    >
      <Image src="/imagendefinitiva.png" width={300} height={300} alt="Avatar" className="mix-blend-lighten rounded-2xl"/>
    </MotionTransition>
  );
};

export default Avatar;

