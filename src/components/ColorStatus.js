import {useContext} from "react";
import {AppContext} from "../App";

function ColorStatus() {
    const {color, type} = useContext(AppContext)
    return <div className="color__preview" style={{
        backgroundColor: color
    }}>{type.toUpperCase()}</div>
}
export default ColorStatus
