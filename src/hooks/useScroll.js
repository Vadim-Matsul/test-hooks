import { useEffect, useRef } from "react"

export const useScroll = (parentRef, childRef, callback, totalPage, page) => {
 const observer = useRef ()
 
 useEffect (() => {
    const params = {
        root: parentRef.current
      }
  observer.current = new IntersectionObserver ((entries) => {
    if (entries[0].isIntersecting && page <= totalPage){
        callback ()
        console.log(totalPage,'p', page)
    }
  }, params)
  observer.current.observe( childRef.current )

    return function (){
        observer.current.unobserve( childRef.current )
    }
 },[callback])
}