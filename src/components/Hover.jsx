import React, { useRef } from "react";
import { useHover } from "../hooks/useHover";

const Hover = () => {

 const  FirstHoverBlock = useRef ()
 const SecondHoverBlock = useRef ()
 const  booleanFirstHoverBlock = useHover ( FirstHoverBlock  )
 const booleanSecondHoverBlock = useHover ( SecondHoverBlock )
    
 
 
 return (
        <div className={"HoverBlocks"}>
          <div 
            className = { booleanFirstHoverBlock    
                            ?'HoverBlockRed'   
                            :'HoverBlockBlue'    }
            ref = { FirstHoverBlock }
            ></div>
          <div 
            className = { booleanSecondHoverBlock   
                            ?'HoverBlockBlack' 
                            :'HoverBlockGreen'   }
            ref = { SecondHoverBlock }
            ></div>
        </div>
    )
}


export default Hover;