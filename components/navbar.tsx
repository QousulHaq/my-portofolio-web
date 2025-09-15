import React from 'react'
import Link from 'next/link'
import { UpRightArrow } from '@/components/icons/arrow'

const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <nav className='nav-container px-7 mt-7'>
                <div className="nav-wrapper flex justify-between items-center">
                    <ul className='list-disc list-inside'>
                        <li className='font-medium text-base leading-7'>
                            <Link href={"/"}>@qousulhaq</Link>
                        </li>
                    </ul>
                    <div className="nav-item-conatainer flex gap-5">
                        <Link href={"/"} className='flex gap-2.5 items-center justify-center'>
                            <p className='font-medium text-base leading-7'>About me</p>
                            <UpRightArrow />
                        </Link>
                        <Link href={"/works"} className='flex gap-2.5 items-center justify-center'>
                            <p className='font-medium text-base leading-7'>Works</p>
                            <UpRightArrow />
                        </Link>
                        <Link href={"skills"} className='flex gap-2.5 items-center justify-center'>
                            <p className='font-medium text-base leading-7'>Skills</p>
                            <UpRightArrow />
                        </Link>
                        <Link href={"/contact"} className='flex gap-2.5 items-center justify-center'>
                            <p className='font-medium text-base leading-7'>Contact</p>
                            <UpRightArrow />
                        </Link>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li className='font-medium text-base leading-7'>
                            Curriculum vitae
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="navbar w-[100%] h-[100vh] bg-earth-white fixed top-0 left-0 z-50 overflow-y-scroll" style={{ clipPath: "inset(84px 28px 28px 28px round 12px)", WebkitClipPath: "inset(84px 28px 28px 28px round 12px)", margin: 0, padding: 0 }}>
                {children}
            </div>
        </>
    )
}

export default Navbar