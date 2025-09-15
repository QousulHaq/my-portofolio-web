import Image from "next/image";
import CtaButton from "@/components/cta-button";
import { FrasurbaneArrow } from "@/components/icons/arrow";

export default function Works() {
  return (
    <>
      <section className="first-section section bg-earth-dark-green">
        <div className="section-wrapper relative p-14 flex flex-col justify-center items-center gap-8 h-full">
          <div className="works-image w-[646px] relative">
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -left-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" className="rotate-180" />
            </div>
            <Image src={"https://placehold.co/646x300/png"} width={646} height={300} alt="project-pict" className="rounded-[12px] object-cover" />
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -right-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" />
            </div>
          </div>
          <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
            <h1 className="text-earth-white text-3xl font-bold text-center leading-10">Building Engaging & Scalable Web Experiences</h1>
            <p className="text-earth-white text-xl font-normal w-[645px] text-center">I’m <span className="font-lora italic">Ahmad Qousul Haq</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Laravel, and modern web technologies.”</p>
          </div>
          <div className="cta">
            <CtaButton buttonText="Take a peek 👀" />
          </div>
        </div>
      </section>
      <section className="first-section section bg-earth-brown">
        <div className="section-wrapper relative p-14 flex flex-col justify-center items-center gap-8 h-full">
          <div className="works-image w-[646px] relative">
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -left-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" className="rotate-180" />
            </div>
            <Image src={"https://placehold.co/646x300/png"} width={646} height={300} alt="project-pict" className="rounded-[12px] object-cover" />
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -right-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" />
            </div>
          </div>
          <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
            <h1 className="text-earth-white text-3xl font-bold text-center leading-10">Building Engaging & Scalable Web Experiences</h1>
            <p className="text-earth-white text-xl font-normal w-[645px] text-center">I’m <span className="font-lora italic">Ahmad Qousul Haq</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Laravel, and modern web technologies.”</p>
          </div>
          <div className="cta">
            <CtaButton buttonText="Take a peek 👀" />
          </div>
        </div>
      </section>
      <section className="first-section section bg-earth-dark-green">
        <div className="section-wrapper relative p-14 flex flex-col justify-center items-center gap-8 h-full">
          <div className="works-image w-[646px] relative">
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -left-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" className="rotate-180" />
            </div>
            <Image src={"https://placehold.co/646x300/png"} width={646} height={300} alt="project-pict" className="rounded-[12px] object-cover" />
            <div className="arrow-right bg-earth-light-green w-fit px-2.5 py-3 rounded-full absolute top-1/2 -right-6 -translate-y-1/2">
              <FrasurbaneArrow color="#373D20" />
            </div>
          </div>
          <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
            <h1 className="text-earth-white text-3xl font-bold text-center leading-10">Building Engaging & Scalable Web Experiences</h1>
            <p className="text-earth-white text-xl font-normal w-[645px] text-center">I’m <span className="font-lora italic">Ahmad Qousul Haq</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Laravel, and modern web technologies.”</p>
          </div>
          <div className="cta">
            <CtaButton buttonText="Take a peek 👀" />
          </div>
        </div>
      </section>
    </>
  );
}
