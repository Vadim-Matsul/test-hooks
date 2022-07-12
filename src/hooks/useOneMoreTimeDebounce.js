import { useCallback, useRef } from "react"


export const useOneMoreTimeDebounce = (callback, delay) => {
 const timer = useRef ()

 const debounce = useCallback ((...args) => {
    if (timer.current) clearTimeout( timer.current )

    timer.current = setTimeout (() => {
        callback (...args)
    }, delay)
 }, [callback])

 return debounce;
}