"use client"
import React, { useRef, useEffect, useState, JSX } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import { ObjectMap } from "@react-three/fiber"

// ---- Props tipe ----
type ModelProps = JSX.IntrinsicElements["group"] & {
    onLoaded?: (loaded: boolean) => void
}

// ---- Typing hasil GLTF ----
type GLTFResult = GLTF & {
    nodes: {
        EyeLeft: THREE.SkinnedMesh
        EyeRight: THREE.SkinnedMesh
        Wolf3D_Body: THREE.SkinnedMesh
        Wolf3D_Hair: THREE.SkinnedMesh
        Wolf3D_Head: THREE.SkinnedMesh
        Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
        Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
        Wolf3D_Outfit_Top: THREE.SkinnedMesh
        Wolf3D_Teeth: THREE.SkinnedMesh
        Hips: THREE.Bone
    }
    materials: {
        Wolf3D_Eye: THREE.Material
        Wolf3D_Body: THREE.Material
        Wolf3D_Hair: THREE.Material
        Wolf3D_Skin: THREE.Material
        Wolf3D_Outfit_Bottom: THREE.Material
        Wolf3D_Outfit_Footwear: THREE.Material
        Wolf3D_Outfit_Top: THREE.Material
        Wolf3D_Teeth: THREE.Material
    }
}

export function CharacterModel(props: ModelProps) {
    const group = useRef<THREE.Group>(null!)
    const [animationIndex, setAnimationIndex] = useState<number>(4)

    const { nodes, materials, animations } = useGLTF(
        "/profileCharacterAnimated.glb"
    ) as GLTFResult & ObjectMap
    const { actions, names } = useAnimations(animations, group)
    const { viewport } = useThree()

    const numbers = [0, 4, 5]

    useEffect(() => {
        const actionName = names[animationIndex]
        if (actionName && actions[actionName]) {
            actions[actionName].reset().fadeIn(0.5).play()
        }

        return () => {
            if (actionName && actions[actionName]) {
                actions[actionName].fadeOut(0.5).stop()
            }
        }
    }, [animationIndex, actions, names])

    const changeAnimation = () => {
        setAnimationIndex((prev) => {
            const filteredNumbers = numbers.filter((n) => n !== prev)
            return filteredNumbers[
                Math.floor(Math.random() * filteredNumbers.length)
            ]
        })
    }

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onClick={changeAnimation}
            scale={viewport.width < 3 ? 0.7 : 1.15}
        >
            <group name="Scene">
                <group name="MainArmature" position={[0, -1.3, 0]}>
                    <skinnedMesh
                        name="EyeLeft"
                        geometry={nodes.EyeLeft.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeLeft.skeleton}
                        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="EyeRight"
                        geometry={nodes.EyeRight.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeRight.skeleton}
                        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Body"
                        geometry={nodes.Wolf3D_Body.geometry}
                        material={materials.Wolf3D_Body}
                        skeleton={nodes.Wolf3D_Body.skeleton}
                    />
                    <skinnedMesh
                        name="Wolf3D_Hair"
                        geometry={nodes.Wolf3D_Hair.geometry}
                        material={materials.Wolf3D_Hair}
                        skeleton={nodes.Wolf3D_Hair.skeleton}
                    />
                    <skinnedMesh
                        name="Wolf3D_Head"
                        geometry={nodes.Wolf3D_Head.geometry}
                        material={materials.Wolf3D_Skin}
                        skeleton={nodes.Wolf3D_Head.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Bottom"
                        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                        material={materials.Wolf3D_Outfit_Bottom}
                        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Footwear"
                        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                        material={materials.Wolf3D_Outfit_Footwear}
                        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Top"
                        geometry={nodes.Wolf3D_Outfit_Top.geometry}
                        material={materials.Wolf3D_Outfit_Top}
                        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                    />
                    <skinnedMesh
                        name="Wolf3D_Teeth"
                        geometry={nodes.Wolf3D_Teeth.geometry}
                        material={materials.Wolf3D_Teeth}
                        skeleton={nodes.Wolf3D_Teeth.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                    />
                    <primitive object={nodes.Hips} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/profileCharacterAnimated.glb")
