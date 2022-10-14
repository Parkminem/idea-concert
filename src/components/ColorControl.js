import {useCallback, useContext} from "react";
import {AppContext} from "../App";

function ColorControl({color}) {

    const {setColor} = useContext(AppContext)

    const handleClick = useCallback(() => {
        setColor(color)
    }, [color, setColor])
    return <div className="controls__color" style={{
        backgroundColor: color
    }}
                onClick={handleClick}
    ></div>
}

export default ColorControl
