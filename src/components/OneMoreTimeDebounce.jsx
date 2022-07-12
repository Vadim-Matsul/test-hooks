import { useState } from "react";
import axios from 'axios';
import { useOneMoreTimeDebounce } from "../hooks/useOneMoreTimeDebounce";

const OneMoreTimeDebounce = () => {
 const [value, setValue] = useState ('')
 const [ info, setInfo ] = useState ('')
 const debounceCallback = useOneMoreTimeDebounce (fetchQuery, 1000)
 
 
 const onChange = el => {
    setValue ( el.target.value )
    if (el.target.value) debounceCallback( el.target.value )
 }
 
 
 function fetchQuery (query) {
    const response = axios.get(`https://jsonplaceholder.typicode.com/todos?query=`+query)
    setInfo (`Отпраился запрос: ${query}`)
}

 

 

    return (
        <div className = {"Debounce"}>
            <input 
               placeholder="Введите запрос"
               value = { value }
               onChange = { onChange }
            />
            <h3>{ info }</h3>
        </div>
    )
}


export default OneMoreTimeDebounce;