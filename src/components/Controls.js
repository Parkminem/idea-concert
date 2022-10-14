import LineWidthInput from "./LineWidthInput";
import TypeButton from "./TypeButton";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import {colors} from "../constant";
import ColorControl from "./ColorControl";

function Controls() {
    return (
        <div className="controls">
            <div className="controls__range">
                <LineWidthInput />
            </div>
            <div className="controls__btns">
                <TypeButton/>
                <SaveButton/>
                <ResetButton/>
            </div>
            <div className="controls__colors">
                {colors.map(color => (
                    <ColorControl key={color} color={color}/>
                ))}
            </div>
        </div>
    )
}

export default Controls
