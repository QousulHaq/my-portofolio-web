"use client"
import React from "react";
import Link from "next/link";

import { useTransform } from "motion/react";
import { motion } from "motion/react";

import CtaButton from "./cta-button";
import GithubIcon from "./icons/social-media";
import ImageCarousel from "./image-carousel";

import type { MotionValue } from "motion/react";

interface WorkData {
    title: string;
    description: string;
    background: string;
    link: string;
    github: string;
    imageUrls: { link: string; type: "video" | "image" }[];
}

const WorkItem = ({
    porto,
    index,
    scrollYProgress,
    total,
}: {
    porto: WorkData;
    index: number;
    scrollYProgress: MotionValue<number>;
    total: number;
}) => {
    const scrollYFormula = (i: number) => 1 / (total - 1) * i;

    const scale =
        index === 0
            ? useTransform(scrollYProgress, [0, 1], [1, 0.8])
            : index === total - 1
                ? useTransform(scrollYProgress, [scrollYFormula(index - 1), 1], [0.8, 1])
                : index === total - 2
                    ? useTransform(scrollYProgress, [scrollYFormula(index - 1), scrollYFormula(index), 1], [0.8, 1, 0.8])
                    : useTransform(
                        scrollYProgress,
                        [scrollYFormula(index - 1), scrollYFormula(index), scrollYFormula(index + 1)],
                        [0.8, 1, 0.8]
                    );

    const rotate =
        index === 0
            ? useTransform(scrollYProgress, [0, 1], [0, -5])
            : index === total - 1
                ? useTransform(scrollYProgress, [scrollYFormula(index - 1), 1], [5, 0])
                : index === total - 2
                    ? useTransform(scrollYProgress, [scrollYFormula(index - 1), scrollYFormula(index), 1], [5, 0, -5])
                    : useTransform(
                        scrollYProgress,
                        [scrollYFormula(index - 1), scrollYFormula(index), scrollYFormula(index + 1)],
                        [5, 0, -5]
                    );

    return (
        <motion.section
            style={{ scale, rotate }}
            className={`first-section section sticky top-0 z-10 ${porto.background}`}
        >
            <div className="section-wrapper relative py-5 px-4 pt-12 md:p-14 flex flex-col justify-start md:justify-center items-center gap-5 md:gap-8 h-full">
                <ImageCarousel imageUrls={porto.imageUrls} />
                <div className="title-and-desc flex flex-col justify-center items-center gap-1.5">
                    <h1 className="text-earth-white text-2xl md:text-3xl font-bold text-center leading-7 md:leading-10">
                        {porto.title}
                    </h1>
                    <p className="text-earth-white text-base md:text-xl font-normal text-center w-full md:w-3/4">
                        {porto.description}
                    </p>
                </div>
                <div className="cta flex justify-center items-center gap-3">
                    <CtaButton buttonText="Take a peek 👀" href={porto.link} />
                    {porto.github !== "" && (
                        <Link href={porto.github} className="bg-icon p-3 md:p-4 rounded-full bg-slate-900">
                            <GithubIcon />
                        </Link>
                    )}
                </div>
            </div>
        </motion.section>
    );
};

export default WorkItem
