"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'motion/react'

import { UpRightArrow } from '@/components/icons/arrow'

const NavItem = ({ href, text }: { href: string, text: string }) => {
    const pathname = usePathname();

    return (
        <Link href={href}>
            <motion.div className="link-wrapper flex gap-2.5 items-center justify-center" whileHover="hovered">
                <div className="text-underline-wrapper relative">
                    <div className="text-wrapper relative overflow-hidden">
                        <p className='font-medium text-base'>{text}</p>
                    </div>
                    {
                        pathname === href && (
                            <motion.div layoutId={"underline"} className='w-full border-b-2 border-black absolute bottom-0 right-1/2 translate-x-1/2'></motion.div>
                        )
                    }
                </div>
                <motion.div
                    variants={{
                        hovered: { rotate: 90, },
                        initial: { rotate: 0, }
                    }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="icon-wrapper"
                >
                    <UpRightArrow color='#000' />
                </motion.div>
            </motion.div>
        </Link >
    )
}

export default NavItem