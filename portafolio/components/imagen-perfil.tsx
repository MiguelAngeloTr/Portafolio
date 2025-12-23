"use client";
import { MotionTransition } from "./transition-component";
import Image from "next/image";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="hidden  md:bottom-6 md:left-6 md:inline-block"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
        {/* Glow suave */}
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/25 via-sky-400/10 to-violet-400/20 blur-xl" />

        <Image
          src="/personalsinfondo.png"
          width={200}
          height={200}
          alt="Avatar"
          priority
          quality={100}
          className="relative h-auto w-auto rounded-xl object-cover mix-blend-lighten"
        />
      </div>
    </MotionTransition>
  );
};

export default AvatarPortfolio;
