"use client"

import React, { useRef, useEffect } from "react"
import Matter from "matter-js"

const pillLabels = [
    "ReactJs", "NextJs", "Tailwind", "Laravel", "CSS",
    "HTML", "PHP", "MySQL", "Javascript", "Github", "Figma"
]

const skills_color = {
    beginner: {
        bg: "#EFF1ED", text: "#373D20"
    },
    intermediate: {
        bg: "#BCBD8B", text: "#373D20"
    },
    advance: {
        bg: "#717744", text: "#EFF1ED"
    },
    fluent: {
        bg: "#766153", text: "#EFF1ED"
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

export default function PhysicsBox() {
    const sceneRef = useRef<HTMLDivElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (!sceneRef.current || !canvasRef.current) return

        const width = sceneRef.current.clientWidth
        const height = sceneRef.current.clientHeight

        // alias dari Matter
        const Engine = Matter.Engine
        const Render = Matter.Render
        const Runner = Matter.Runner
        const Composite = Matter.Composite
        const Bodies = Matter.Bodies
        const MouseConstraint = Matter.MouseConstraint
        const Mouse = Matter.Mouse

        // create engine
        const engine = Engine.create()
        const world = engine.world

        // create renderer
        const render = Render.create({
            element: sceneRef.current,
            canvas: canvasRef.current!,
            engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
            },
        })

        Render.run(render)

        // create runner
        const runner = Runner.create()
        Runner.run(runner, engine)

        // ⚙️ Create temporary canvas context for measuring text
        const tempCanvas = document.createElement("canvas")
        const tempCtx = tempCanvas.getContext("2d")!
        tempCtx.font = "600 30px Epilogue, sans-serif" // Match your actual text font

        // add 11 pill shapes
        const pills: Matter.Body[] = []
        for (let i = 0; i < 11; i++) {
            const textWidth = tempCtx.measureText(skills_set[i].label).width

            const paddingX = 50
            const pillWidth = textWidth + paddingX
            const pillHeight = 60

            const margin = 50 // distance from edges
            const x = Math.random() * (width - pillWidth - margin * 2) + margin
            const y = Math.random() * (height - pillHeight - margin * 2) + margin

            const pill = Bodies.rectangle(x, y, pillWidth, pillHeight, {
                chamfer: { radius: 30 },
                restitution: 0.8,
                render: {
                    fillStyle: skills_color[skills_set[i].level as keyof typeof skills_color].bg
                },
            })
            pills.push(pill)
        }

        Composite.add(world, pills)

        // add walls
        Composite.add(world, [
            Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true }), // ceiling
            Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true }), // ground
            Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true }), // right wall
            Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true }), // left wall
        ])

        // add mouse control
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        })
        Composite.add(world, mouseConstraint)
        render.mouse = mouse

        Matter.Events.on(render, "afterRender", () => {
            const ctx = render.context
            ctx.font = "600 30px Epilogue, sans-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"

            pills.forEach((pill, i) => {
                ctx.save()

                // Pindah ke posisi pill
                ctx.translate(pill.position.x, pill.position.y)

                // Rotasi sesuai sudut pill
                ctx.rotate(pill.angle)

                ctx.fillStyle = skills_color[skills_set[i].level as keyof typeof skills_color].text

                // Gambar teks di tengah
                ctx.fillText(skills_set[i].label, 0, 0)

                ctx.restore()
            })
        })

        // fit the render viewport
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height },
        })

        // clean-up
        return () => {
            Render.stop(render)
            Runner.stop(runner)
            Matter.World.clear(world, false)
            Matter.Engine.clear(engine)
            render.canvas.remove()
            render.textures = {}
        }
    }, [])

    return (
        <div
            ref={sceneRef}
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <canvas ref={canvasRef} />
        </div>
    )
}
