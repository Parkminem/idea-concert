import {useContext} from "react";
import {AppContext} from "../App";

function LineWidthInput() {
    const {lineWidth, setLineWidth} = useContext(AppContext)
    return (
        <input type="range" min="0.5" max="6.5" value={lineWidth} step="0.1"
               onChange={e => setLineWidth(e.target.value)}/>
    )
}

export default LineWidthInput
