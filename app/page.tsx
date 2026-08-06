import CtaButton from "@/components/cta-button";
import ThreeCanvas from "@/components/three-canvas";
import { CharacterModel } from "@/components/models/character";

export default function Home() {
  return (
    <>
      <section className="first-section section pe-0 bg-[url(/grid.png)] bg-cover bg-no-repeat bg-center bg-earth-dark-green relative">
        <div className="section-wrapper relative flex flex-col lg:flex-row justify-between items-center h-full pt-12 lg:pt-0">
          <div className="hero-text-cta w-full space-y-5 lg:space-y-8 py-5 px-4 lg:p-14 z-50 absolute pointer-events-none">
            <div className="text-part space-y-1 lg:space-y-3">
              <h1 className="text-earth-white text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start">Building Engaging &</h1>
              <h1 className="text-earth-white text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start">Scalable Web Experiences</h1>
              <p className="text-earth-white text-sm md:text-base lg:text-lg font-normal text-center lg:text-start w-full lg:w-[645px] mt-3 lg:mt-0">Hi, i’m <span className="font-lora italic">Qousul</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Next.js, and modern web technologies.”</p>
            </div>
            <div className="cta-part w-fit mx-auto lg:mx-0 pointer-events-auto">
              <CtaButton buttonText="Let's Connect 🤝" href="https://id.linkedin.com/in/ahmad-qousul-haq" />
            </div>
          </div>
          <div className="3d-model-part size-full z-10 absolute">
            <ThreeCanvas fov={25}>
              <CharacterModel />
            </ThreeCanvas>
          </div>
          <div className="info-3d flex flex-col justify-center items-end absolute bottom-16 md:bottom-10 right-5 md:right-7 w-1/2">
            <p className="text-earth-light-green md:text-earth-green font-normal text-base md:text-xl leading-5 md:leading-7 text-right">click to change animation</p>
          </div>
        </div>
      </section>
    </>
  );
}
