import {useContext} from "react";
import {AppContext} from "../App";

function SaveButton() {
    const {
        paletteRef
    } = useContext(AppContext)
    const save = () => {
        const imgURL = paletteRef.current.toDataURL(`image/png`);
        const dlLink = document.createElement('a');
        dlLink.download = `Palette.png`;
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [`image/png`, dlLink.download, dlLink.href].join(':');

        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    }


    return <button onClick={save}>Save</button>
}

export default SaveButton
