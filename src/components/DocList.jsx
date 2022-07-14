import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getTotalPage } from '../utils/getTotalPage'
import { useScroll } from "../hooks/useScroll";




const DocList = () => {
 const [ todos, setTodos ] = useState ([])
   const [ posts, setPosts ] = useState ([])
 const [ limit, setLimit ] = useState (20)
 const [ pageTodos, setPageTodos ] = useState (1)
   const [ pagePosts, setPagePosts ] = useState (1)
 const [ totalPageTodos, setTotalPageTodos ] = useState (1)
   const [ totalPagePosts, setTotalPagePosts ] = useState (1)
 const parentTodos = useRef ()
 const lastChildTodos = useRef ()
   const parentPosts = useRef ()
   const lastChildPosts = useRef ()
 
 const intersectedTodos = useScroll (parentTodos, lastChildTodos, () => fetchTodos(limit, pageTodos), pageTodos, totalPageTodos )
 const intersectedPosts = useScroll (parentPosts, lastChildPosts, () => fetchPosts(limit, pagePosts), pagePosts, totalPagePosts )

 const   fetchTodos   = async (limit, pageTodos) => {
    const    response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${pageTodos}`)
    const  totalCount = response.headers[ 'x-total-count' ] 
    setTotalPageTodos ( getTotalPage( totalCount, limit ) )
             setTodos ( [  ...todos, ...response.data   ] )
         setPageTodos ( pageTodos + 1 )
 }

 const  fetchPosts   = async (limit, pagePosts) => {
   const    response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pagePosts}`)
   const  totalCount = response.headers[ 'x-total-count' ] 
   setTotalPagePosts ( getTotalPage( totalCount, limit ) )
            setPosts ( [  ...posts, ...response.data   ] )
        setPagePosts ( pagePosts + 1 )
 }



 return (
        <div className = {'ScrollBlock'}>
            <div 
              className = {'ScrollList'} 
              ref = { parentTodos } 
              >
                { todos.map( todo => 
                    <div 
                      className = {'List-child'}
                      key = { todo.id }
                      >
                        <h3>{ todo.id }</h3>
                        <h2>{ todo.title }</h2>
                        <span>{ JSON.stringify( todo.completed ) }</span>
                    </div>
                )}
                <div 
                  className = {'List-lastChild'}
                  ref = { lastChildTodos }
                  />
            </div>

            <div 
              className = {'ScrollList'} 
              ref = { parentPosts } 
              >
                { posts.map( post => 
                    <div 
                      className = {'List-child'}
                      key = { post.id }
                      >
                        <h3>{ post.id }<br/>{ post.title }</h3>
                        <span>{ post.body }</span>
                    </div>
                )}
                <div 
                  className = {'List-lastChild'}
                  ref = { lastChildPosts }
                  />
            </div>
        </div>
    )
}


export default DocList;