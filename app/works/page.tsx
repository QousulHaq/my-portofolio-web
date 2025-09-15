"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";

import CtaButton from "@/components/cta-button";
import { FrasurbaneArrow } from "@/components/icons/arrow";

import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

export default function Works() {
  const container = useRef(null);
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    container: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  const scale3 = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const rotate3 = useTransform(scrollYProgress, [0.5, 1], [5, 0]);

  useEffect(() => {
    if (!container.current) return

    const lenis = new Lenis({
      wrapper: container.current,
      content: container.current,
      duration: 1,
      easing: (x) => 1 - Math.pow(1 - x, 3),
      lerp: 0.1,
      wheelMultiplier: 1,
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className="section-container relative w-[100%] h-[100vh] overflow-y-scroll" ref={container}>
        <div className="section-wrapper bg-black" ref={scrollTarget}>
          <motion.section style={{ scale, rotate }} className="first-section section bg-earth-dark-green sticky top-0 z-10">
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
          </motion.section>
          <motion.section style={{ scale: scale2, rotate: rotate2 }} className="first-section section bg-earth-brown sticky top-0 z-20">
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
          </motion.section>
          <motion.section style={{ scale: scale3, rotate: rotate3 }} className="first-section section bg-earth-dark-green sticky top-0 z-30">
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
          </motion.section>
        </div>
        <div className="info-3d flex flex-col justify-center items-end fixed bottom-14 right-14 z-[999]">
          <p className="text-earth-green font-normal text-xl leading-7 mix-blend-difference">Scroll down ↓↓</p>
          <p className="text-earth-green font-normal text-xl leading-7 mix-blend-difference">to look another works</p>
        </div>
      </div>
    </>
  );
}
