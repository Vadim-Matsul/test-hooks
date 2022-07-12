import { useReducer } from "react";
import { useRequest } from "../hooks/useRequest";
import axios from 'axios';

const Request = () => {
 
 async function getTodos () {
    return await axios.get(`https://jsonplaceholder.typicode.com/todos`)
 }

 const [todos, loading, error] = useRequest (getTodos)
   
 
 
 
 return (
        <div className={'ScrollList'}>
            { error &&
             <h2>error</h2>
            }
            { loading
            ? <h1>Идёт загрузка...</h1>
            : todos.map( todo => 
                    <div 
                        className = {'List-child'}
                        key = { todo.id }
                        >
                        <h3>{todo.id} <br/> {todo.title}</h3>
                        <span>{ JSON.stringify(todo.completed) }</span>
                    </div>
               )}
        </div>
    )
}


export default Request;