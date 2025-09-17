"use client"
import { useEffect, useRef } from "react";

import CtaButton from "@/components/cta-button";
import ImageCarousel from "@/components/image-carousel";

import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

export default function Works() {
  const worksData = [
    {
      title: "Masami – Family Recipe Sharing Platform",
      description: `Masami is a web app I built to document and share family recipes. It supports full recipe CRUD, multi-family “rooms” under one account, and role-based features where members can request dishes and family heads can approve or decline them. The platform is designed to preserve culinary traditions while fostering collaboration within families.`,
      background: "bg-earth-dark-green",
      link: "https://recipe-web-frontend-five.vercel.app/dashboard",
      imageUrls: [
        {
          link: "/IoT-1.mp4",
          type: "video"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto",
          type: "image"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto2",
          type: "image"
        },
      ]
    },
    {
      title: "Article Management Website",
      description: `A CRUD-based article platform built with admin and user roles, developed as part of a recruitment test for Sellerpintar. The main challenge was implementing a custom WYSIWYG editor using Slate.js, ensuring flexibility and a smooth writing experience.`,
      background: "bg-earth-brown",
      link: "https://front-end-sellerpintar-web.vercel.app/login",
      imageUrls: [
        {
          link: "/IoT-1.mp4",
          type: "video"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto",
          type: "image"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto2",
          type: "image"
        },
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: `A responsive portfolio website designed and built to showcase my projects, skills, and professional journey. It emphasizes clean UI, smooth navigation, and engaging presentation to reflect both technical expertise and creativity.`,
      background: "bg-earth-green",
      link: "https://front-end-sellerpintar-web.vercel.app/login",
      imageUrls: [
        {
          link: "/IoT-1.mp4",
          type: "video"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto",
          type: "image"
        },
        {
          link: "https://placehold.co/646x300/png?text=foto2",
          type: "image"
        },
      ]
    },
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
              <ImageCarousel imageUrls={porto.imageUrls} />
              <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
                <h1 className="text-earth-white text-3xl font-bold text-center leading-10">
                  {porto.title}
                </h1>
                <p className="text-earth-white text-xl font-normal text-center w-3/4">
                  {porto.description}
                </p>
              </div>
              <div className="cta">
                <CtaButton buttonText="Take a peek 👀" href={porto.link} />
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
