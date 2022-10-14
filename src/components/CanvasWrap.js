import Palette from "./Palette";
import ColorStatus from "./ColorStatus";
import LineStatus from "./LineStatus";

function CanvasWrap() {
    return (
        <div className="canvas-wrap">
            <Palette/>
            <div className="status__box">
                <ColorStatus/>
                <LineStatus/>
            </div>

        </div>
    )
}

export default CanvasWrap
