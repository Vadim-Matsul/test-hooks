import { useEffect, useState } from "react"


export const useHover = (ref) => {

  const [booleanHover, setBooleanHover] = useState ( false )

  const  on = () => { setBooleanHover( true  ) }
  const off = () => { setBooleanHover( false ) }

 
  useEffect (() => {
   const hoverBlock = ref.current
   hoverBlock.addEventListener ('mouseenter',  on )
   hoverBlock.addEventListener ('mousemove' ,  on )
   hoverBlock.addEventListener ('mouseleave', off )
  
        return function removeListeners () {
            hoverBlock.removeEventListener ('mouseenter',  on )
            hoverBlock.removeEventListener ('mousemove' ,  on )
            hoverBlock.removeEventListener ('mouseleave', off )
        }
  },[])
  
 return booleanHover;
}