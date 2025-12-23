import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import TimeLine from "@/components/time-line";
import HeroPhoto from "@/components/HeroPhoto";

const PageAboutMe = () => {
  return (
    <>
    
      <TransitionPage />
      
      <ContainerPage>
        
        <section className="relative">
          

          <div className="mt-10 md:mt-14">
            <h1 className="text-3xl font-extrabold leading-tight text-center text-slate-100 md:text-left md:text-5xl">
              Toda mi{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                trayectoria profesional
              </span>
            </h1>
            

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-center text-slate-300 md:text-left md:text-lg">
              Formación en Ingeniería Informática y enfoque en desarrollo full stack y analítica de
              datos. Experiencia en proyectos académicos y prácticas con herramientas modernas.
            </p>
          </div>

          <div className="mt-10 md:mt-12">
            <CounterServices />
          </div>

          <div className="my-10 h-px w-full bg-white/10" />
             <HeroPhoto/>

          <div className="mt-10 md:mt-12">
            <TimeLine />
          </div>
        </section>
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
