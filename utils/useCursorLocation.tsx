"use client"
import React, { useState, useEffect } from 'react'

const useCursorLocation = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event: React.MouseEvent) => {
        setCursorPosition({ x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove as any)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove as any)
        }
    }, [])

    return cursorPosition
}

export default useCursorLocation