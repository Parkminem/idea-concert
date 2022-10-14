import {createContext, useMemo, useRef, useState} from "react";
import Controls from "./components/Controls";
import CanvasWrap from "./components/CanvasWrap";

export const AppContext = createContext(null)


function App() {
    const [color, setColor] = useState(`#2C2C2C`)
    const [lineWidth, setLineWidth] = useState(3)
    const [clear, setClear] = useState(0)
    const [type, setType] = useState(`paint`)
    const paletteRef = useRef()
    const paletteContextRef = useRef()

    const value = useMemo(() => {
        return {
            color, setColor, lineWidth, setLineWidth, clear, setClear, type, setType, paletteRef, paletteContextRef
        }
    }, [clear, color, lineWidth, type])
    return (
        <AppContext.Provider value={value}>
            <CanvasWrap/>
            <Controls/>
        </AppContext.Provider>
    );
}

export default App;
