import { useEffect, useRef } from "react"

export const useScroll = (parentRef, childRef, callback) => {
 const observer = useRef ()

 useEffect (() => {
    
    const params = { 
            root: parentRef.current,
            rootMargin: '50px'
     }
     
     function InterCallback (entries) {
      if (entries[0].isIntersecting){
        callback ()
      }}
    
     observer.current = new IntersectionObserver ( InterCallback, params )
     observer.current.observe( childRef.current )

      return function (){
        observer.current.unobserve( childRef.current )
      }
    }, [callback])
}