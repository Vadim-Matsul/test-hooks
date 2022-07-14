import { useState } from "react";
import axios from 'axios';
import { useDebounce } from "../hooks/useDebounce";




const Debounce = () => {
 const [ value, setValue ] = useState ('')
 const [  info, setInfo  ] = useState('')

 const debounceCB = useDebounce ( fetchTodos, 500 )

 const onChange = el => {
    setValue( el.target.value )
    if (el.target.value) debounceCB( el.target.value )
 }

 function fetchTodos  (query)  {
    const response =  axios.get(`https://jsonplaceholder.typicode.com/todos?`+query)
    setInfo (query)
 }


    return (
        <div 
          className = {'Debounce'}>
            <h3>Отправился запрос: { info }</h3>
            <input 
                placeholder = "Введите запрос..."
                value = { value }
                onChange = { onChange }
                />
        </div>
    )
}


export default Debounce;