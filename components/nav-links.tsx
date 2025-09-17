"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import NavItem from './nav-item'
import BurgerMenu from './icons/burger-menu'

import { useViewportSize } from '@/utils/useBetterMediaQuery'

const NavItemLinks = [
    { href: "/", text: "About me" },
    { href: "/works", text: "Works" },
    { href: "/skills", text: "Skills" },
    { href: "/contact", text: "Contact" },
]

const NavLinks = () => {
    const { isTabletOrMobile } = useViewportSize()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {
                !isTabletOrMobile ? (
                    <div className="nav-item-container flex gap-5">
                        {NavItemLinks.map((nav, index) => (
                            <NavItem href={nav.href} text={nav.text} key={`item-link-${index}`} />
                        ))}
                    </div>
                ) : (
                    <div className="menu-mobile-wrapper relative">
                        {/* Burger Menu button */}
                        <button onClick={() => setIsOpen(true)} className='absolute -top-2'>
                            <BurgerMenu color='black' className='size-4' />
                        </button>

                        {/* Mobile Menu Overlay */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className="menu-mobile bg-earth-white z-[999] fixed top-0 left-0 w-full h-full"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <motion.div className="menu-wrapper w-full h-full relative flex justify-center items-center">
                                        {/* Close button */}
                                        <button onClick={() => setIsOpen(false)}>
                                            <CloseIcon color='black' className='absolute top-14 right-14 size-8' />
                                        </button>

                                        <motion.div
                                            className="nav-item-container flex flex-col items-start gap-10"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {NavItemLinks.map((nav, index) => (
                                                <NavItem href={nav.href} text={nav.text} key={`item-link-${index}`} onClick={() => setIsOpen(false)} />
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            }
        </>
    )
}

export default NavLinks


// CloseIcon component
type CloseIconProps = React.ComponentProps<"svg"> & {
    color?: string;
};

const CloseIcon = ({
    color = "white",
    ...props
}: CloseIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
