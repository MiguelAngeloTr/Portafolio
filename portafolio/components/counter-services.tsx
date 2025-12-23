"use client";

import { dataCounter } from "@/data";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-10 md:grid-cols-4 md:gap-6">
      {dataCounter.map(({ id, text, lineRight, lineRightMobile }) => (
        <div key={id} className="relative">
          <div
            className={[
              "px-4 py-3",
              lineRight ? "md:border-e md:border-white/10" : "",
              lineRightMobile ? "border-e border-white/10" : "",
            ].join(" ")}
          >
            <p className="text-sm font-semibold text-slate-100 tracking-wide">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;

