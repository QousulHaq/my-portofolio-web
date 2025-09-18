"use client"
import { useEffect, useRef } from "react";

import WorkItem from "@/components/work-item";

import { useScroll } from "motion/react";
import Lenis from "lenis";

export default function Works() {
  const worksData = [
    {
      title: "Web Based Online Exam Application",
      description: `I developed the front-end of a web-based online examination platform. The system’s main feature is automated monitoring during exams using WebSocket technology, ensuring real-time supervision. My role in this project focused on migrating the front-end from Vue.js to React.js while implementing a newly redesigned user interface to improve usability and user experience.`,
      link: "",
      github: "",
      figma: "",
      imageUrls: [
        {
          link: "/porto-pa.mp4",
          type: "video"
        },
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: `A responsive portfolio website designed and built to showcase my projects, skills, and professional journey. It emphasizes clean UI, smooth navigation, and engaging presentation to reflect both technical expertise and creativity.`,
      link: "https://my-portofolio-web-six.vercel.app",
      github: "https://github.com/QousulHaq/my-portofolio-web",
      figma: "",
      imageUrls: [
        {
          link: "/foto-porto-myweb-1.png",
          type: "image"
        },
      ]
    },
    {
      title: "Masami – Family Recipe Sharing Platform",
      description: `Masami is a web app I built to document and share family recipes. It supports full recipe CRUD, multi-family “rooms” under one account, and role-based features where members can request dishes and family heads can approve or decline them. The platform is designed to preserve culinary traditions while fostering collaboration within families.`,
      link: "https://recipe-web-frontend-five.vercel.app/dashboard",
      github: "https://github.com/QousulHaq/front-end-sellerpintar-web",
      figma: "",
      imageUrls: [
        {
          link: "/foto-porto-masami-1.png",
          type: "image"
        },
      ]
    },
    {
      title: "Article Management Website",
      description: `A CRUD-based article platform built with admin and user roles, developed as part of a recruitment test for Sellerpintar. The main challenge was implementing a custom WYSIWYG editor using Slate.js, ensuring flexibility and a smooth writing experience. try to login using oioioi and password for (user) and banzai and password for (admin) [username, password]`,
      link: "https://front-end-sellerpintar-web.vercel.app/login",
      github: "https://github.com/QousulHaq/front-end-sellerpintar-web",
      figma: "",
      imageUrls: [
        {
          link: "/foto-porto-sellerpintar-1.png",
          type: "image"
        },
      ]
    },
    {
      title: "Public Information Website - Dinkominfo Surabaya",
      description: `I contributed to the development of a public information website for Surabaya’s official government portal (surabaya.go.id). My role involved redesigning the website using Figma and developing the front-end with Next.js, focusing on creating a more user-friendly and modern interface to enhance public communication and accessibility.`,
      link: "",
      github: "https://github.com/Qousul/surabaya-go-id-new",
      figma: "https://www.figma.com/design/MbL23o37T6IYwKapWe2BSk/REDESAIN-SURABAYA.GO.ID?node-id=297-3&p=f",
      imageUrls: [
        {
          link: "/foto-porto-dinkominfo-1.png",
          type: "image"
        },
      ]
    },
    {
      title: "Office Route - Microsoft Office Learning Platform",
      description: `I developed Office Route, a web-based learning platform focused on Microsoft Office software (Word, Excel, PowerPoint). The platform provides educational videos, quizzes, and certifications, offering a complete learning experience similar to modern e-learning platforms.`,
      link: "",
      github: "https://github.com/QousulHaq/office_route-backend",
      figma: "https://www.figma.com/design/Mw2ipSxiins6BD4N8L4qny/OFFICE-ROUTE?node-id=0-1&p=f",
      imageUrls: [
        {
          link: "/foto-porto-officeroute-1.png",
          type: "image"
        },
        {
          link: "/porto-officeroute.mp4",
          type: "video"
        },
      ]
    },
    {
      title: "UMKM Catalogue - SMEs centralized platform",
      description: `I built UMKM Catalogue, a centralized platform that allows small and medium enterprises (SMEs) to showcase their products and locations. The website features product photos, 360-degree location views, and a commenting system, making it easier for users to discover and connect with nearby SMEs.`,
      link: "",
      github: "https://github.com/iZenrix/umkm-catalogue-frontend",
      figma: "https://www.figma.com/design/8jzqJ4SFIDAqB6aqbNUijA/UMKM-Catalogue?node-id=0-1&p=f",
      imageUrls: [
        {
          link: "/foto-porto-umkmcatalogue-1.png",
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
    function raf(time: number) {
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
          <WorkItem
            key={`work-${i}`}
            porto={porto}
            index={i}
            scrollYProgress={scrollYProgress}
            total={worksData.length}
          />
        ))}

      </div>
      <div className="info-3d flex flex-col justify-center items-end fixed bottom-5 md:bottom-14 right-8 md:right-14 z-[999] w-fit">
        <p className="text-earth-light-green md:text-earth-green font-normal text-xs md:text-xl leading-3.5 md:leading-7 text-right w-fit">Scroll down ↓↓</p>
        <p className="text-earth-light-green md:text-earth-green font-normal text-xs md:text-xl leading-3.5 md:leading-7 text-right w-fit">to look another works</p>
      </div>
    </div>
  );
}
