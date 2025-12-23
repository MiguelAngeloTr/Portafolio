"use client";
import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div key={id} className="relative">
          <div
            className={[
              "px-4",
              // separadores verticales
              lineRight ? "md:border-e md:border-white/10" : "",
              lineRightMobile ? "border-e border-white/10" : "",
            ].join(" ")}
          >
            <p className="flex mb-2 text-2xl font-extrabold md:text-4xl">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                +
                <CountUp end={endCounter} start={0} duration={5} />
              </span>
            </p>

            <p className="text-xs uppercase max-w-[180px] text-slate-300 tracking-wider">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;
