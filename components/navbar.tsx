import React from 'react'
import Link from 'next/link'

import NavItem from './nav-item'
import { FrasurbaneArrow } from './icons/arrow'
import { splitLetters } from '@/utils/textSplitter'

import * as motion from "motion/react-client"

const NavItemLinks = [
    {
        href: "/",
        text: "About me"
    },
    {
        href: "/works",
        text: "Works"
    },
    {
        href: "/skills",
        text: "Skills"
    },
    {
        href: "/contact",
        text: "Contact"
    },
]

const arrowVariant = {
    initial: {
        opacity: 0,
        x: -10,
        rotate: -90
    },
    hovered: {
        opacity: 100,
        x: 0,
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
    return (
        <>
            <nav className='nav-container px-7 mt-7'>
                <div className="nav-wrapper flex justify-between items-center">
                    <motion.div
                        className="home-button-wrapper flex justify-center items-center gap-2"
                        whileHover={"hovered"}
                        initial={"initial"}
                    >
                        <Link href={"/"} className='relative overflow-hidden'>
                            <motion.p className='font-medium text-base leading-7' variants={textVariant}>
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
                            <motion.p className='font-medium text-base leading-7 absolute -bottom-7' variants={textVariant}>
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
                    <div className="nav-item-conatainer flex gap-5">
                        {
                            NavItemLinks.map((nav, index) => (
                                <NavItem href={nav.href} text={nav.text} key={`item-link-${index}`} />
                            ))
                        }
                    </div>
                    <motion.div
                        className="cv-button-wrapper flex justify-center items-center gap-2"
                        whileHover={"hovered"}
                        initial={"initial"}
                        variants={{
                            initial: {
                                x: 0
                            },
                            hovered: {
                                x: -20
                            },
                        }}
                    >
                        <Link href="https://drive.google.com/file/d/1uMmhOm5d9v8vZUbF-8MAbkj3L9yQybnG/view?usp=sharing" target="_blank">
                            <ul className='list-disc list-inside'>
                                <li className='font-medium text-base leading-7'>
                                    Curriculum vitae
                                </li>
                            </ul>
                        </Link>
                        <motion.div
                            variants={arrowVariant}
                        >
                            <FrasurbaneArrow color='#000' />
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
            <div className="navbar w-[100%] h-[100vh] bg-earth-white fixed top-0 left-0 z-50 overflow-hidden" style={{ clipPath: "inset(84px 28px 28px 28px round 12px)", WebkitClipPath: "inset(84px 28px 28px 28px round 12px)", margin: 0, padding: 0 }}>
                {children}
            </div>
        </>
    )
}

export default Navbar