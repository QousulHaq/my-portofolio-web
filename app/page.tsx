import CtaButton from "@/components/cta-button";
import ThreeCanvas from "@/components/three-canvas";
import { CharacterModel } from "@/components/models/character";

export default function Home() {
  return (
    <>
      <section className="first-section section pe-0 bg-[url(/grid.png)] bg-cover bg-no-repeat bg-center bg-earth-dark-green">
        <div className="section-wrapper relative flex justify-between items-center h-full">
          <div className="hero-text-cta space-y-8 py-14 ps-14">
            <div className="text-part space-y-3">
              <h1 className="text-earth-white text-5xl font-bold">Building Engaging &</h1>
              <h1 className="text-earth-white text-5xl font-bold">Scalable Web Experiences</h1>
              <p className="text-earth-white text-xl font-normal w-[645px]">I’m <span className="font-lora italic">Ahmad Qousul Haq</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Laravel, and modern web technologies.”</p>
            </div>
            <div className="cta-part">
              <CtaButton buttonText="Get in Touch" />
            </div>
          </div>
          <div className="3d-model-part w-[45%] h-full">
            <ThreeCanvas fov={25}>
              <CharacterModel />
            </ThreeCanvas>
          </div>
          <div className="info-3d flex flex-col justify-center items-end absolute bottom-10 right-7">
            <p className="text-earth-green font-normal text-xl leading-7">double-click to look detail</p>
            <p className="text-earth-green font-normal text-xl leading-7">click to change animation</p>
          </div>
        </div>
      </section>
    </>
  );
}
