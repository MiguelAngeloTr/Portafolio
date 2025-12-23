"use client";

import Image from "next/image";
import Link from "next/link";

interface PortfolioProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = ({ data }: PortfolioProps) => {
  const { title, image, urlGithub, urlDemo } = data;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-md
        p-5
        transition-all duration-300
        hover:bg-white/10 hover:border-cyan-400/20
        hover:shadow-xl hover:shadow-cyan-500/10
      "
    >
      {/* Glow sutil al hover */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-sky-400/5 to-violet-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="relative mb-4 text-lg font-bold text-slate-100 line-clamp-2">
        {title}
      </h3>

      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="relative mt-5 flex gap-3">
        <Link
          href={urlGithub}
          target="_blank"
          className="
            flex-1 text-center
            px-4 py-2 rounded-xl font-semibold
            border border-white/10 bg-white/5
            text-slate-100
            transition-all duration-300
            hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10
          "
        >
          GitHub
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="
            flex-1 text-center
            px-4 py-2 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-400/90 via-sky-500/90 to-violet-500/90
            text-darkBg
            transition-all duration-300
            hover:shadow-lg hover:shadow-sky-500/20
          "
        >
          Demo
        </Link>
      </div>
    </article>
  );
};

export default PortfolioBox;
