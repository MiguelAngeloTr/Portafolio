"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import HeroPhoto from "./HeroPhoto";

const Introduction = () => {
  return (
    <section className="relative z-20 w-full bg-darkBg/60">
      <div className="grid items-center h-full max-w-6xl gap-12 px-6 py-20 mx-auto md:py-0 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <HeroPhoto />
        </div>

        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-center text-white md:text-left md:text-6xl">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                " puedes programarlo",
                1000,
                " puedes optimizarlo",
                1000,
                " puedes implementarlo",
                1000,
                " puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(56,189,248,0.30)]"
            />
          </h1>

          <p className="mx-auto mb-8 text-base leading-relaxed text-center text-slate-300 md:mx-0 md:text-left md:text-lg">
            Como desarrollador full stack, combino diseño y funcionalidad para crear
            experiencias digitales claras, eficientes y accesibles.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Link
              href="/projects"
              className="px-5 py-3 font-semibold text-white transition-all border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contact"
              className="px-5 py-3 font-semibold transition-all rounded-xl bg-gradient-to-r from-cyan-400/90 via-sky-500/90 to-violet-500/90 text-darkBg hover:shadow-lg hover:shadow-sky-500/20"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>

      {/* Glows decorativos sutiles */}
      <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
    </section>
  );
};

export default Introduction;
