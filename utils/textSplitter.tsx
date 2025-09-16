import React from "react";
import * as motion from 'motion/react-client'

export const splitLetters = (word: string, floating: number) => {
    let letters: React.ReactNode[] = []
    word.split("").forEach((letter, i) => {
        letters.push(
            <motion.span
                variants={{
                    initial: { y: 0 },
                    hovered: { y: -floating }
                }}
                key={letter + "_" + i}
                className={`inline-block`}
            >
                {letter}
            </motion.span>
        )
    })
    return letters;
}