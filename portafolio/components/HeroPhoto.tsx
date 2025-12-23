"use client";
import Image from "next/image";

export default function HeroPhoto() {
  return (
    
    <div className="relative mx-auto w-[260px] md:w-[320px] lg:w-[360px]">
  <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-gradient-to-r from-cyan-400/20 via-sky-400/10 to-violet-400/20 blur-2xl" />

  <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
    <div className="relative h-[360px] md:h-[420px] lg:h-[480px] w-full">
      <Image
        src="/personalsinfondo.png"
        alt="Foto de perfil"
        fill
        priority
        className="object-cover object-top"
      />
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
  </div>
</div>

  );
}
