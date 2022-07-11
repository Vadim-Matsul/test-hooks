import React, { useState } from "react"


export const useInput = (initialValue) => {
 
 const [ value, setValue] = useState (initialValue)

 const onChange = el => {
    setValue ( el.target.value )
 }

 return {
    value,
    onChange
 }

}