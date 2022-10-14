import {useCallback, useContext, useEffect, useState} from "react";
import {AppContext} from "../App";

function Palette() {
    const {color, lineWidth, clear, type, paletteRef, paletteContextRef} = useContext(AppContext)
    const [isDrawing, setIsDrawing] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const canvas = paletteRef.current;
        canvas.width = 700
        canvas.height = 700
        const context = canvas.getContext(`2d`)
        context.scale(2, 2)
        paletteContextRef.current = context
    }, [paletteContextRef, paletteRef])
    useEffect(() => {
        const canvas = paletteRef.current;
        const context = paletteContextRef.current
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = `white`;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, [clear, paletteContextRef, paletteRef])
    useEffect(() => {
        if (paletteContextRef) {
            const context = paletteContextRef.current
            context.lineWidth = lineWidth
            context.strokeStyle = color
        }
    }, [color, lineWidth, paletteContextRef, paletteRef])

    useEffect(() => {
        if (paletteContextRef) {
            const context = paletteContextRef.current
            if (isDrawing) {
                context.lineTo(position.x, position.y)
                context.stroke()
            } else {
                context.beginPath()
                context.moveTo(position.x, position.y)
            }
        }
    }, [isDrawing, paletteContextRef, position.x, position.y, type])

    const fill = useCallback(() => {
        const canvas = paletteRef.current;
        const context = paletteContextRef.current
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, [color, paletteContextRef, paletteRef])


    const handleMouseDown = useCallback(() => {
        if (type === "fill") {
            fill()
            return
        }

        setIsDrawing(true);
    }, [fill, type])
    const handleMouseMove = useCallback((e) => {
            const rect = paletteRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            setPosition({x: x / 2, y: y / 2});
        }, [paletteRef])

    const stopDraw = useCallback(() => {
        setIsDrawing(false)
    }, [])
    return (
        <canvas
            className="canvas"
            ref={paletteRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDraw}
            onMouseMove={handleMouseMove}
            onMouseLeave={stopDraw}
        ></canvas>
    )
}

export default Palette
