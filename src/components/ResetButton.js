import {useContext} from "react";
import {AppContext} from "../App";

function ResetButton() {
    const {
        setClear
    } = useContext(AppContext)
    const reset = () => {
        setClear(x => x+1)
    }


    return <button onClick={reset}>Reset
    </button>
}

export default ResetButton
