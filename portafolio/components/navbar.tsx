"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex w-full justify-center bottom-8"
    >
      <nav>
        <div className="
          flex items-center gap-2 px-4 py-2
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-md
          shadow-xl shadow-black/20
        ">
          {itemsNavbar.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-full
                  transition-all duration-300
                  ${isActive
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-darkBg shadow-lg shadow-cyan-500/30"
                    : "text-slate-200 hover:bg-white/10 hover:text-cyan-300"}
                `}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
