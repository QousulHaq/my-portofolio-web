"use client"
import React, { useRef, JSX } from "react"
import { useGLTF } from "@react-three/drei"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useThree, ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"

gsap.registerPlugin(useGSAP)

// Type untuk hasil glTF
type GLTFResult = {
    nodes: {
        [key: string]: THREE.Mesh
    }
    materials: {
        [key: string]: THREE.Material
    }
}

// Props dari group react-three-fiber
type ModelProps = JSX.IntrinsicElements["group"]

export function KeyboardModel(props: ModelProps) {
    const { nodes, materials } = useGLTF("/keyboard.glb") as unknown as GLTFResult
    const { viewport } = useThree()

    // Ref untuk group masing-masing key
    const containerModel = useRef<THREE.Group | null>(null)
    const linkedinKey = useRef<THREE.Group | null>(null)
    const mailKey = useRef<THREE.Group | null>(null)
    const githubKey = useRef<THREE.Group | null>(null)
    const instagramKey = useRef<THREE.Group | null>(null)

    const { contextSafe } = useGSAP({ scope: containerModel })

    // Fungsi klik dengan typing benar
    const clickFunction = contextSafe(
        (e: ThreeEvent<MouseEvent>, keyRef: React.RefObject<THREE.Group | null>, link: string) => {
            e.stopPropagation()
            if (!keyRef.current) return

            const tl = gsap.timeline({
                onComplete: () => {
                    window.open(link, "_blank")
                },
            })

            tl.to(keyRef.current.position, {
                y: "-=75",
                duration: 0.25,
                ease: "circ",
            }).to(keyRef.current.position, {
                y: "+=75",
                duration: 0.25,
                ease: "circ",
            })
        }
    )

    return (
        <group {...props} dispose={null} ref={containerModel}>
            <group scale={viewport.width < 3 ? 0.00085 : 0.0013} position={[0, 0.1, 0]} rotation={[1, 0.5, -0.3]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Boolean.geometry}
                    material={materials['keyboard-2']}
                    position={[0, -211.36, -8.237]}
                    scale={[1, 0.733, 0.976]}
                />
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Empty_path_.geometry}
                    material={materials.kabel}
                    position={[-58.996, -228.444, -16.322]}
                    rotation={[0, 1.571, 0]}
                /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Instgram_Path__.geometry}
                    material={nodes.Instgram_Path__.material}
                    position={[-58.996, -227.677, -16.322]}
                    rotation={[0, 1.571, 0]}
                />
                <group position={[138.4, -102.006, 135.911]} ref={mailKey} onClick={(e) => clickFunction(e, mailKey, "mailto:aqousulhaq@gmail.com?subject=Hello&body=Halo, ini email otomatis!")}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={nodes.Cube.material}
                        position={[0, 41, 0]}
                    />
                    <group
                        position={[-109.4, 90.74, -79.911]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[0.36, 0.36, 25]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0.geometry}
                            material={materials['mail-1']}
                            position={[115.1, -158.6, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1.geometry}
                            material={materials['mail-2']}
                            position={[401.1, -158.7, 0.01]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_2.geometry}
                            material={materials['mail-3']}
                            position={[401.1, -94.7, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_3.geometry}
                            material={materials['mail-4']}
                            position={[199.2, -112.4, 0.03]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_4.geometry}
                            material={materials['mail-5']}
                            position={[115.1, -94.7, 0.04]}
                        />
                    </group>
                </group>
                <group position={[137.887, -97.006, -139.454]} ref={linkedinKey} onClick={(e) => clickFunction(e, linkedinKey, "https://id.linkedin.com/in/ahmad-qousul-haq")}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001.geometry}
                        material={materials['key-linkedin']}
                        position={[0, 41, 0]}
                    />
                    <group
                        position={[-59.21, 93.75, -59.78]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[0.38, 0.38, 50]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0001.geometry}
                            material={nodes.Shape_0001.material}
                            position={[4.927, -99.73, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1001.geometry}
                            material={nodes.Shape_1001.material}
                            position={[0, -0.341, 0.01]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_2001.geometry}
                            material={nodes.Shape_2001.material}
                            position={[106.176, -94.761, 0.02]}
                        />
                    </group>
                </group>
                <group position={[-138.4, -102.006, 135.911]} ref={githubKey} onClick={(e) => clickFunction(e, githubKey, "https://github.com/QousulHaq")}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002.geometry}
                        material={materials['key-github']}
                        position={[0, 41, 0]}
                    />
                    <group
                        position={[-74.6, 91.69, -64.911]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[0.536, 0.536, 14.286]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0002.geometry}
                            material={nodes.Shape_0002.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1002.geometry}
                            material={nodes.Shape_1002.material}
                            position={[44.425, -179.711, 0.01]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1003.geometry}
                            material={nodes.Shape_1003.material}
                            position={[51.05, -183.991, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1004.geometry}
                            material={nodes.Shape_1004.material}
                            position={[55.481, -190.252, 0.03]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1005.geometry}
                            material={nodes.Shape_1005.material}
                            position={[61.605, -198.937, 0.04]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1006.geometry}
                            material={nodes.Shape_1006.material}
                            position={[69.73, -202.871, 0.05]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1007.geometry}
                            material={nodes.Shape_1007.material}
                            position={[80.235, -204.81, 0.06]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_1008.geometry}
                            material={nodes.Shape_1008.material}
                            position={[90.812, -204.869, 0.07]}
                        />
                    </group>
                </group>
                <group position={[-138.4, -97.006, -139.454]} ref={instagramKey} onClick={(e) => clickFunction(e, instagramKey, "https://www.instagram.com/qousulhaq/")}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials['key-instagram']}
                        position={[0, 41, 0]}
                    />
                    <group
                        position={[-57.038, 87.493, -65.682]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[5.779, 5.779, 50]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0003.geometry}
                            material={nodes.Shape_0003.material}
                            position={[0.082, -0.123, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0004.geometry}
                            material={nodes.Shape_0004.material}
                            position={[14.09, -3.498, 0.01]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Shape_0005.geometry}
                            material={nodes.Shape_0005.material}
                            position={[4.863, -4.892, 0.02]}
                        />
                    </group>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle.geometry}
                    material={materials['keyboard-1']}
                    position={[0, -245.031, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.snap_Path_.geometry}
                    material={nodes.snap_Path_.material}
                    position={[-58.996, -227.677, -16.322]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tiktok_Path__.geometry}
                    material={nodes.Tiktok_Path__.material}
                    position={[-58.996, -227.677, -16.322]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.X__Path___.geometry}
                    material={nodes.X__Path___.material}
                    position={[-58.996, -227.677, -16.322]}
                    rotation={[0, 1.571, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/keyboard.glb")
