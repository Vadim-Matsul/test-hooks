import { useEffect, useRef } from "react"

export const useScroll = (parentRef, childRef, callback, page, totalPage) => {
 const observer = useRef ()

 useEffect (() => {

 const params = {
    root: parentRef.current
 }

 function intersectedCallBack (entries) {
    if (entries[0].isIntersecting && page <= totalPage){
        callback ()
    }
 }

   observer.current = new IntersectionObserver (intersectedCallBack, params)
   observer.current.observe( childRef.current )


   return function (){
    observer.current.unobserve( childRef.current )
   }
 },[callback])
}