import Link from "next/link";

import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
   

      <section className="relative z-10 max-w-5xl px-6 mx-auto py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-[520px]">
            <h1 className="text-3xl font-extrabold leading-tight text-center text-slate-100 md:text-left md:text-5xl">
              Mis{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                servicios
              </span>
              .
            </h1>

            <p className="mt-6 text-base leading-relaxed text-center text-slate-300 md:text-left md:text-lg">
              Desarrollo soluciones web y de datos enfocadas en rendimiento, claridad y resultados.
              Puedo ayudarte a construir aplicaciones con React/Next.js, APIs con Node.js y
              proyectos de analítica (ETL + dashboards en Power BI) para apoyar la toma de decisiones.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/90" />
                Frontend moderno con React/Next.js
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                Backend/APIs con Node.js + PostgreSQL/MongoDB
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300/90" />
                Analítica: EDA, ETL, Power BI y bases para Big Data (Spark)
              </li>
            </ul>

            <div className="flex flex-col items-center gap-3 mt-8 md:flex-row md:justify-start">
              <Link
                href="/contact"
                className="w-full md:w-fit text-center px-5 py-3 font-semibold transition-all rounded-xl bg-gradient-to-r from-cyan-400/90 via-sky-500/90 to-violet-500/90 text-darkBg hover:shadow-lg hover:shadow-sky-500/20"
              >
                Contacta conmigo
              </Link>

              <Link
                href="/projects"
                className="w-full md:w-fit text-center px-5 py-3 font-semibold text-slate-100 transition-all border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Ver proyectos
              </Link>
            </div>
          </div>

          {/* SLIDER */}
          <div className="flex justify-center md:justify-end">
            <SliderServices />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
