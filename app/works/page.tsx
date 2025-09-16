"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";

import CtaButton from "@/components/cta-button";
import { FrasurbaneArrow } from "@/components/icons/arrow";
import ImageCarousel from "@/components/image-carousel";

import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

export default function Works() {
  const worksData = [
    { text: "porto-satu", background: "bg-earth-green" },
    { text: "porto-dua", background: "bg-earth-dark-green" },
    { text: "porto-tiga", background: "bg-earth-light-green" },
    { text: "porto-empat", background: "bg-earth-brown" },
    { text: "porto-satu", background: "bg-earth-green" },
    { text: "porto-dua", background: "bg-earth-dark-green" },
    { text: "porto-tiga", background: "bg-earth-light-green" },
    { text: "porto-empat", background: "bg-earth-brown" },
    { text: "porto-satu", background: "bg-earth-green" },
    { text: "porto-dua", background: "bg-earth-dark-green" },
    { text: "porto-tiga", background: "bg-earth-light-green" },
    { text: "porto-empat", background: "bg-earth-brown" },
    { text: "porto-satu", background: "bg-earth-green" },
    { text: "porto-dua", background: "bg-earth-dark-green" },
    { text: "porto-tiga", background: "bg-earth-light-green" },
    { text: "porto-empat", background: "bg-earth-brown" },
    { text: "porto-satu", background: "bg-earth-green" },
    { text: "porto-dua", background: "bg-earth-dark-green" },
    { text: "porto-tiga", background: "bg-earth-light-green" },
    { text: "porto-empat", background: "bg-earth-brown" },
  ]

  const container = useRef(null);
  const scrollTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    container: container,
    offset: ["start start", "end end"],
  });

  const scrollYFormula = (index: number) => 1 / (worksData.length - 1) * index;

  // ✅ bikin semua scale dan rotate hook di sini biar konsisten
  const scales = worksData.map((_, index) => {
    if (index === 0) {
      return useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    } else if (index === worksData.length - 1) {
      return useTransform(scrollYProgress, [scrollYFormula(index - 1), 1], [0.8, 1]);
    } else if (index === worksData.length - 2) {
      return useTransform(scrollYProgress, [scrollYFormula(index - 1), scrollYFormula(index), 1], [0.8, 1, 0.8]);
    } else {
      return useTransform(
        scrollYProgress,
        [scrollYFormula(index - 1), scrollYFormula(index), scrollYFormula(index + 1)],
        [0.8, 1, 0.8]
      );
    }
  });

  const rotates = worksData.map((_, index) => {
    if (index === 0) {
      return useTransform(scrollYProgress, [0, 1], [0, -5]);
    } else if (index === worksData.length - 1) {
      return useTransform(scrollYProgress, [scrollYFormula(index - 1), 1], [5, 0]);
    } else if (index === worksData.length - 2) {
      return useTransform(scrollYProgress, [scrollYFormula(index - 1), scrollYFormula(index), 1], [5, 0, -5]);
    } else {
      return useTransform(
        scrollYProgress,
        [scrollYFormula(index - 1), scrollYFormula(index), scrollYFormula(index + 1)],
        [5, 0, -5]
      );
    }
  });

  useEffect(() => {
    if (!container.current) return;

    const lenis = new Lenis({
      wrapper: container.current,
      content: container.current,
      duration: 1,
      easing: (x) => 1 - Math.pow(1 - x, 3),
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="section-container relative w-[100%] h-[100vh] overflow-y-scroll" ref={container}>
      <div className="section-wrapper bg-black" ref={scrollTarget}>
        {worksData.map((porto, i) => (
          <motion.section
            key={`work-${i}`}
            style={{ scale: scales[i], rotate: rotates[i] }}
            className={`first-section section sticky top-0 z-10 ${porto.background}`}
          >
            <div className="section-wrapper relative p-14 flex flex-col justify-center items-center gap-8 h-full">
              <ImageCarousel imageUrls={["foto-1", "foto-2", "foto-3", "foto-4", "foto-5", "foto-6", "foto-7"]} />
              <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
                <h1 className="text-earth-white text-3xl font-bold text-center leading-10">
                  Building Engaging & Scalable Web Experiences
                </h1>
                <p className="text-earth-white text-xl font-normal w-[645px] text-center">
                  I’m <span className="font-lora italic">Ahmad Qousul Haq</span>, a Frontend Developer passionate about crafting interactive and user-friendly digital solutions with React.js, Laravel, and modern web technologies.”
                </p>
              </div>
              <div className="cta">
                <CtaButton buttonText="Take a peek 👀" />
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <div className="info-3d flex flex-col justify-center items-end fixed bottom-14 right-14 z-[999]">
        <p className="text-earth-green font-normal text-xl leading-7 mix-blend-difference">Scroll down ↓↓</p>
        <p className="text-earth-green font-normal text-xl leading-7 mix-blend-difference">to look another works</p>
      </div>
    </div>
  );
}
