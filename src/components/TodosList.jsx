import React, { useRef, useState } from "react";
import axios from "axios";
import { useScroll } from "../hooks/useScroll";
import { getTotalPages } from "../utils/getTotalPages";

const  TodoList = () => {
 const [ todos, setTodos ] = useState ([])
 const [ posts, setPosts ] = useState ([])
 const [ limit, setLimit ] = useState (20)
 const         [ page, setPage ] = useState (1)
 const [ pagePost, setPagePost ] = useState (1)
 const [ totalPageTodos, setTotalPageTodos ] = useState (1)
 const [ totalPagePosts, setTotalPagePosts ] = useState (1)
 
 
 const     parentRef = useRef ()
 const      childRef = useRef ()
 const parentPostRef = useRef ()
 const  childPostRef = useRef ()

const intersectedTodos = useScroll ( 
                                     parentRef, 
                                     childRef, 
                                     () => fetchTodos (limit, page), 
                                     totalPageTodos, 
                                     page )
const intersectedPosts = useScroll (
                                     parentPostRef, 
                                     childPostRef, 
                                     () => fetchPosts (limit, pagePost), 
                                     totalPagePosts, 
                                     pagePost )

async function fetchTodos (limit, page) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
  const totalCountTodos = response.headers['x-total-count']
  setTotalPageTodos ( getTotalPages(totalCountTodos, limit) )
  setTodos ([...todos, ...response.data]) 
  setPage ( page + 1 )
}

async function fetchPosts (limit, pagePost) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pagePost}`)
    const totalCountPosts = response.headers['x-total-count']
    setTotalPagePosts ( getTotalPages(totalCountPosts, limit) )
    setPosts ([...posts, ...response.data]) 
    setPagePost ( pagePost + 1 )
  }


    return (
        <div className={"ScrollBlock"}>
            <div 
              className = {'ScrollList'}
              ref = { parentRef }>
                { todos.map( todo => 
                    <div 
                        className = {'List-child'}
                        key = { todo.id }
                        >
                        <h3>{todo.id} <br/> {todo.title}</h3>
                        <span>{ JSON.stringify(todo.completed) }</span>
                    </div>
                )}
                <div 
                    style = {{height: 20}}
                    ref = { childRef }
                    ></div>
            </div>
            <div 
              className = {'ScrollList'}
              ref = { parentPostRef }>
                { posts.map( post => 
                    <div 
                        className = {'List-child'}
                        key = { post.id }
                        >
                        <h3>{post.id} <br/> {post.title}</h3>
                        <span>{ post.body }</span>
                    </div>
                )}
                <div 
                    style = {{height: 20}}
                    ref = { childPostRef }
                    ></div>
            </div>
        </div>
    )
};


export default TodoList;