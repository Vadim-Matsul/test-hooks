import React, { useRef, useState } from "react";
import axios from "axios";
import { useScroll } from "../hooks/useScroll";

const  TodoList = () => {
 const [todos, setTodos] = useState ([])
 const [limit, setLimit] = useState (20)
 const [page, setPage] = useState (1)
 const parentRef = useRef ()
 const childRef = useRef ()

const intersected = useScroll (parentRef, childRef, () => fetchTodos (limit, page))

 async function fetchTodos (limit, page) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
  setTodos ([...todos, ...response.data]) 
  setPage ( page + 1)
}


    return (
        <div 
            className={'ScrollList'}
            ref={ parentRef }>
          { todos.map( todo => 
             <div 
                className={'List-child'}
                key = { todo.id }>
                  <h3>{todo.id} <br/> {todo.title}</h3>
                  <span>{ JSON.stringify(todo.completed) }</span>
             </div>
           )}
           <div 
              style = {{height: 20}}
              ref = { childRef }></div>
        </div>
    )
};


export default TodoList;