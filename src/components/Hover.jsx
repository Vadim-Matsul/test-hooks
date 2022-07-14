import React, { useRef } from "react";
import { useHover } from "../hooks/useHover";


const Hover = () => {

 const  firstBlock = useRef ()
 const secondBlock = useRef ()
 const  booleanFirstBlock = useHover ( firstBlock  )
 const booleanSecondBlock = useHover ( secondBlock )
 
   return (
        <div className = {'HoverBlocks'}>
            <div
                className = { booleanFirstBlock 
                              ?'HoverBlockRed' 
                              :'HoverBlockBlue' } 
                ref = { firstBlock }
                />
            <div
                className = { booleanSecondBlock 
                              ?'HoverBlockBlack' 
                              :'HoverBlockGreen' } 
                ref = { secondBlock }
                />
        </div>
    )
}


export default Hover;