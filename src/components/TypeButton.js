import {useContext} from "react";
import {AppContext} from "../App";

function TypeButton() {
    const {type, setType} = useContext(AppContext)

    const setFill = () => {
        setType(`fill`)
    }
    const setPaint = () => {
        setType(`paint`)
    }

    if (type === "paint") {
        return <button onClick={setFill}>Paint</button>
    }

    return <button onClick={setPaint}>Fill</button>
}

export default TypeButton
