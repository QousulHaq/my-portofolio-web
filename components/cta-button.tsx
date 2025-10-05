"use client"
import React, { useState } from 'react'
import { FrasurbaneArrow } from "@/components/icons/arrow";
import * as motion from "motion/react-client"
import Link from 'next/link';

const CtaButton = ({ buttonText, href }: { buttonText: string, href: string }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)
    if (href === "") {
        // return (
        //     <div className={`button bg-earth-light-green px-3 py-2 rounded-full flex justify-center items-center gap-2.5 w-fit overflow-hidden cursor-not-allowed opacity-65`}>
        //         <div className="arrow-container bg-earth-brown rounded-full px-2 py-2 md:px-2.5 md:py-3 z-50">
        //             <FrasurbaneArrow className="-rotate-45 size-3.5 md:size-auto" />
        //         </div>
        //         <div className="text-wrapper relative">
        //             <p className="text-earth-dark-green text-base md:text-xl font-semibold leading-6">Under Maintenance</p>
        //         </div>
        //     </div>
        // )
        return <></>
    }
    return (
        <Link href={href} target='__blank'>
            <motion.div className={`button group hover:bg-earth-green bg-earth-light-green px-3 py-2 rounded-full flex ${isHovered ? "flex-row-reverse" : ""} justify-center items-center gap-2.5 w-fit overflow-hidden`} whileHover={"hovered"} onMouseEnter={() => setIsHovered((prev) => !prev)} onMouseLeave={() => setIsHovered((prev) => !prev)}>
                <motion.div layout variants={{ initial: { rotate: 0 }, hovered: { rotate: 45 } }} className="arrow-container bg-earth-brown group-hover:bg-earth-light-green rounded-full px-2 py-2 md:px-2.5 md:py-3 z-50">
                    <FrasurbaneArrow className="-rotate-45 size-3.5 md:size-auto" />
                </motion.div>
                <div className="text-wrapper relative">
                    <motion.p layout className="text-earth-dark-green text-base md:text-xl font-semibold leading-6" variants={{ hovered: { opacity: 0 } }}>{buttonText}</motion.p>
                    <motion.p layout className="text-earth-white text-base md:text-xl font-semibold leading-6 text-center absolute bottom-0 w-full opacity-0" variants={{ hovered: { opacity: 100 } }}>Let&apos;s Goo!</motion.p>
                </div>
            </motion.div>
        </Link>
    )
}

export default CtaButton