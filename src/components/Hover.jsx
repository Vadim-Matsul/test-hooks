import React, { useRef } from "react";
import { useHover } from "../hooks/useHover.js"

const Hover = () => {
 const blockRef = useRef ()
 const secondBlockRef = useRef ()
 const hovering = useHover ( blockRef )
 const secondHovering = useHover ( secondBlockRef )


    return (
        <div className={ "HoverBlocks" }>
            <div
                className = { hovering ? "HoverBlockRed" : "HoverBlockBlue" }
                ref = { blockRef }
                >
            </div>
            <div
                className = { secondHovering ? "HoverBlockBlack" : "HoverBlockGreen" }
                ref = { secondBlockRef }
                >
            </div>
        </div>
       
    )
}

export default Hover;