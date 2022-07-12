import React, { useRef, useState } from "react";
import axios from 'axios';
import { useScroll } from "../hooks/useScroll";

const TodosList = () => {

 const [ todos, setTodos ] = useState ([])
 const [ posts, setPosts ] = useState ([])
 const [ limit, setLimit ] = useState (20)
 const [ page , setPage  ] = useState (1)
 const [ pagePost , setPagePost  ] = useState (1)
 const      parentRef = useRef ()
 const       childRef = useRef ()
 const parentPostsRef = useRef ()
 const  childPostsRef = useRef ()

 const answerTodos = useScroll ( parentRef, childRef, () => fetchTodos(limit, page) )
 const answerPosts = useScroll ( parentPostsRef, childPostsRef, () => fetchPosts(limit, pagePost) )

 async function fetchTodos (limit, page) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
    setTodos ( [...todos, ...response.data] ) 
    setPage  ( page + 1 )
}

async function fetchPosts (limit, page) {
   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
   setPosts ( [...posts, ...response.data] ) 
   setPagePost  ( pagePost + 1 )
}
    return(
        <div className={'ScrollBlock'}>
            <div className={'ScrollBlock-title'}>
              <h2>Todos</h2>
              <h2>Posts</h2>
            </div> 
            <div className={'ScrollBlock-body'}>
            <div 
                className = {'ScrollList'}
                 ref = { parentRef }
                 >
                { todos.map( todo => 
                    <div 
                        className = {'List-child'}
                        key = { todo.id } 
                        >
                        <h2>{ todo.id }</h2>
                        <span>{ todo.title }</span>
                        <h3>{ JSON.stringify( todo.completed ) }</h3>
                    </div>
                )}
                <div 
                    className = {'Last-child'}
                    ref = { childRef }
                    ></div>
           </div>
           <div 
            className = {'ScrollList'}
            ref = { parentPostsRef }
            >
                { posts.map( post => 
                    <div 
                        className = {'List-child'}
                        key = { post.id } 
                        >
                            <h2>{ post.id }</h2>
                          <h3>{ post.title }</h3>
                         <span>{ post.body }</span>
                    </div>
                )}
                <div 
                    className = {'Last-child'}
                    ref = { childPostsRef }
                    ></div>
           </div>
        </div>
        </div>
    )
}


export default TodosList;