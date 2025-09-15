import ThreeCanvas from "@/components/three-canvas";
import { KeyboardModel } from "@/components/models/keyboard";

export default function Contact() {
  return (
    <>
      <section className="first-section section bg-[url(/grid.png)] bg-cover bg-no-repeat bg-center bg-earth-dark-green">
        <div className="section-wrapper relative flex justify-center items-center h-full">
          <ThreeCanvas fov={25}>
            <KeyboardModel />
          </ThreeCanvas>
          <div className="info-3d flex flex-col justify-center items-end absolute bottom-10 right-7">
            <p className="text-earth-green font-bold text-5xl leading-12">Contact me_</p>
          </div>
        </div>
      </section>
    </>
  );
}
