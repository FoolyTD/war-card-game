// The shop component allows for players to choose different table skins with the
// tableTexture state variable. tableTexture & handleChangeTableTexture live at the "./src/App.js"
// level. I pass the function as a prop so I can updated the state for all component (keeping the skin)
// That the user likes. 

// I imported useEffect because I couldn't get past this warning I was recieving
import { useEffect, useState } from 'react';
export default function Shop({ tableTexture, handleChangeTableTexture }) {
    const [stateUpdate, setStateUpdate] = useState(null);
    
    const tableTextures = [{type: "wood", style: "table-container"}, {type: "Stone", style: "table-container-1"}]

    // useEffect(() => {
        
    // }, []);

    const updateState = (style) => {
        handleChangeTableTexture(style)
        // setStateUpdate(!setStateUpdate);
    }

    const displayTableTextures = () => {
        return tableTextures.map((texture, index) => {
            return (
            <button type="button" key={`texture-${index}`} onClick={()=>updateState(texture.style)}>{texture.type}</button>
            )
        })
    }
    return (
        <div className="shop-container">
            <div className={tableTexture}>
            <h1 className="outcome-text">Shop</h1>
            <ul>
            {displayTableTextures()}
            </ul>
            </div>
        </div>
    )
}