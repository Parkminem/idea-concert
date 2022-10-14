import {useContext, useEffect, useRef} from "react";
import {AppContext} from "../App";

function LineStatus() {
    const {lineWidth} = useContext(AppContext)
    const canvasRef = useRef()
    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext(`2d`)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(50, canvas.height / 2)
        ctx.lineTo(canvas.width - 50, canvas.height / 2)
        ctx.stroke()
    }, [lineWidth])
    return (
        <canvas className="line__status" ref={canvasRef}></canvas>
    )
}

export default LineStatus
