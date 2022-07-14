import { useEffect, useState } from "react";

export const useHover = ( ref ) => {
 const [ hoverBoolean, setHoverBoolean ] = useState ()
 
 const  on = () => setHoverBoolean ( true  )
 const off = () => setHoverBoolean ( false )
 
 useEffect (() => {
    const node = ref.current

     node.addEventListener('mouseenter', on  )
     node.addEventListener('mousemove' , on  )
     node.addEventListener('mouseleave', off )

     return function () {
        node.removeEventListener('mouseenter', on  )
        node.removeEventListener('mousemove' , on  )
        node.removeEventListener('mouseleave', off )
     }
 },[])

 return hoverBoolean;
}