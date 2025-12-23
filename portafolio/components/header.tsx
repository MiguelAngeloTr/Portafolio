import React from "react";
import { MotionTransition } from "./transition-component";
import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-6 md:px-20"
    >
      <header>
        <div className="container flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
          <Link href="/">
            <h1 className="my-3 text-2xl font-bold text-center md:text-left leading-tight text-slate-100">
              Miguel Angel Jimenez Trochez
              <span className="inline bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(56,189,248,0.35)]">
               {"  "} | Ingeniero informático 
              </span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-6 md:gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="text-slate-200/90 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
