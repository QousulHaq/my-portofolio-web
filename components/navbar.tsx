"use client"
import React from 'react'
import Link from 'next/link'

import { useViewportSize } from '@/utils/useBetterMediaQuery'

import { FrasurbaneArrow } from './icons/arrow'
import NavLinks from './nav-links'
import { splitLetters } from '@/utils/textSplitter'

import { motion } from "motion/react"

const arrowVariant = {
    initial: {
        opacity: 0,
        x: 0,
        rotate: -90
    },
    hovered: {
        opacity: 100,
        x: 30,
        rotate: 0
    },
}

const textVariant = {
    initial: {},
    hovered: {
        transition: {
            staggerChildren: 0.03
        }
    }
}

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const { isTabletOrMobile } = useViewportSize()
    return (
        <>
            <nav className='nav-container px-3.5 mt-5 md:px-7 md:mt-7'>
                <div className="nav-wrapper flex justify-between items-center">
                    <motion.div
                        className="home-button-wrapper flex justify-center items-center gap-2"
                        whileHover={"hovered"}
                        initial={"initial"}
                    >
                        <Link href={"https://instagram.com/qousulhaq"} className='relative overflow-hidden' target='__blank'>
                            <motion.p className='font-medium text-xs md:text-base leading-3 md:leading-7' variants={textVariant}>
                                <motion.span
                                    variants={{
                                        initial: { y: 0 },
                                        hovered: { y: -28 }
                                    }}
                                    className={`inline-block pr-3`}
                                >
                                    •
                                </motion.span>
                                {splitLetters("@qousulhaq", 28)}
                            </motion.p>
                            <motion.p className='font-medium text-xs md:text-base leading-3 md:leading-7 absolute -bottom-7' variants={textVariant}>
                                <motion.span
                                    variants={{
                                        initial: { y: 0 },
                                        hovered: { y: -28 }
                                    }}
                                    className={`inline-block pr-3`}
                                >
                                    •
                                </motion.span>
                                {splitLetters("@qousulhaq", 28)}
                            </motion.p>
                        </Link>
                    </motion.div>
                    <NavLinks />
                    <motion.div
                        className="cv-button-wrapper relative"
                        whileHover={"hovered"}
                        initial={"initial"}
                        variants={{
                            initial: {
                                x: 0
                            },
                            hovered: {
                                x: -30
                            },
                        }}
                    >
                        <Link href="https://drive.google.com/file/d/1uMmhOm5d9v8vZUbF-8MAbkj3L9yQybnG/view?usp=sharing" target="_blank">
                            <ul className='list-disc list-inside'>
                                <li className='font-medium text-xs md:text-base leading-3 md:leading-7'>
                                    Curriculum vitae
                                </li>
                            </ul>
                        </Link>
                        <motion.div
                            variants={arrowVariant}
                            className='absolute right-0 bottom-1/2 translate-y-1/2'
                        >
                            <FrasurbaneArrow color='#000' />
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
            <div className="navbar w-[100%] h-[100vh] bg-earth-white fixed top-0 left-0 z-50 overflow-hidden" style={{ clipPath: `${isTabletOrMobile ? "inset(52px 14px 14px 14px round 8px)" : "inset(84px 28px 28px 28px round 12px)"}`, WebkitClipPath: `${isTabletOrMobile ? "inset(52px 14px 14px 14px round 8px)" : "inset(84px 28px 28px 28px round 12px)"}`, margin: 0, padding: 0 }}>
                {children}
            </div>
        </>
    )
}

export default Navbar