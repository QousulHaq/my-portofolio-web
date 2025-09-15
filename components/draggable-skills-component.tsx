"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from "motion/react"
import { expo } from 'maath/dist/declarations/src/easing'

const skills_color = {
    beginner: {
        bg: "bg-earth-white", text: "text-earth-dark-green"
    },
    intermediate: {
        bg: "bg-earth-light-green", text: "text-earth-dark-green"
    },
    advance: {
        bg: "bg-earth-green", text: "text-earth-white"
    },
    fluent: {
        bg: "bg-earth-brown", text: "text-earth-white"
    }
}

const skills_set = [
    {
        label: "MySQL", level: "intermediate"
    },
    {
        label: "Tailwind", level: "intermediate"
    },
    {
        label: "Laravel", level: "intermediate"
    },
    {
        label: "PHP", level: "intermediate"
    },
    {
        label: "Javascript", level: "advance"
    },
    {
        label: "Github", level: "advance"
    },
    {
        label: "ReactJs", level: "advance"
    },
    {
        label: "NextJs", level: "advance"
    },
    {
        label: "Figma", level: "fluent"
    },
    {
        label: "CSS", level: "fluent"
    },
    {
        label: "HTML", level: "fluent"
    },
]

const DraggableSkillsComponent = () => {
    const constraintsRef = useRef(null)
    const [clientOnlySkills, setClientOnlySkills] = useState<any[]>([])

    useEffect(() => {
        // Randomize only after mounting (client-side)
        const randomized = skills_set.map((skill) => ({
            ...skill,
            top: `${Math.floor(Math.random() * 90)}%`,
            left: `${Math.floor(Math.random() * 90)}%`,
            rotation: Math.floor(Math.random() * 60 - 30), // -30 to +30 deg
        }))
        setClientOnlySkills(randomized)
    }, [])

    if (clientOnlySkills.length === 0) {
        return null // or a loading placeholder
    }

    return (
        <motion.div className='w-full h-full relative' ref={constraintsRef}>
            {
                clientOnlySkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`skill-pill px-8 py-3 rounded-full ${skills_color[skill.level as keyof typeof skills_color].bg} w-fit absolute`}
                        style={{
                            top: skill.top,
                            left: skill.left,
                        }}
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        dragMomentum={true}
                        initial={{ rotate: skill.rotation }}
                        whileTap={{ scale: 1.05 }}
                        whileDrag={{ rotate: skill.rotation + 10 }}
                    >
                        <p className={`text-3xl font-semibold ${skills_color[skill.level as keyof typeof skills_color].text}`}>
                            {skill.label}
                        </p>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}
export default DraggableSkillsComponent