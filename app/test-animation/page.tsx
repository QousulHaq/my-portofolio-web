import React from 'react'
import * as motion from 'motion/react-client'

const textVariant = {
    initial: {},
    hovered: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const wordVariant = {
    initial: { y: 0 },
    hovered: { y: -45 }
}

export default function TextStagger() {
    return (
        <section className="second-section w-[100%] h-[100vh] ps-7 pe-2 pt-[84px] bg-earth-dark-green flex justify-center items-center">
            <motion.div className='text-wrapper bg-amber-400 relative overflow-hidden' whileHover={"hovered"} initial={"initial"}>
                <motion.p className='text-earth-white font-semibold text-5xl' variants={textVariant}>
                    <motion.span variants={wordVariant} className='inline-block'>A</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>N</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>J</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>A</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>Y</motion.span>
                </motion.p>
                <motion.p className='text-earth-white font-semibold text-5xl absolute' variants={textVariant}>
                    <motion.span variants={wordVariant} className='inline-block'>A</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>N</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>J</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>A</motion.span>
                    <motion.span variants={wordVariant} className='inline-block'>Y</motion.span>
                </motion.p>
            </motion.div>
        </section>
    );
}
