import { useState } from "react"

export const useInput = () => {
 
 const [ value, setValue ] = useState ('')

 const onChange = el => setValue ( el.target.value )

 return {
    value,
    onChange
 }
}