import React, { useState } from "react";
import axios from 'axios';
import { useDebounce } from "../hooks/useDebounce";

const Debounce = () => {
 const [ value, setValue ] = useState ('')
 const [ info, setInfo ] = useState ('')

 const fetchData = (query) => {
    const response = axios.get(`https://jsonplaceholder.typicode.com/todos?query=`+query)
    setInfo (`Отправился запрос: ${query}`)
}

 const debounceCallback = useDebounce (fetchData, 1000)

 const onChange = el => {
    setValue(  el.target.value )
    if (el.target.value.length > 0){
        debounceCallback( el.target.value )
    }
 }

    return (
        <div className={'Debounce'}>
            <input 
                value = { value }
                onChange = { onChange }
                placeholder='Введите запрос'/>
                <h3>{ info }</h3>
        </div>
    )
}


export default Debounce;