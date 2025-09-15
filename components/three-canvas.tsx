"use client"
import { JSX, Suspense } from "react"
import useCursorLocation from "@/utils/useCursorLocation"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from '@react-three/drei'
import { easing } from 'maath'

function Rig({ pointerX, pointerY }: { pointerX: number, pointerY: number }): JSX.Element | null {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [Math.sin(-pointerX) * -1, -pointerY * 1, 1 + Math.cos(pointerX) * 1],
            0.2,
            delta,
        )
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export default function ThreeCanvas({ children, fov = 35 }: { children?: React.ReactNode, fov?: number }) {
    const { x, y } = useCursorLocation()

    return (
        <Canvas camera={{ position: [-1, 0.5, 1], fov }} style={{ userSelect: "none" }}>
            <Environment preset='sunset' />
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Rig pointerX={x} pointerY={y} />
        </Canvas>
    )
}
