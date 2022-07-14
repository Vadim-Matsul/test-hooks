import axios  from 'axios';
import { useRequest } from '../hooks/useRequest';


const Request = () => {

 const [Todos, loading, error] = useRequest ( fetchTodos )

 function fetchTodos () {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
 }
 
    return (
            <div 
              className = {'ScrollList'} 
              >
             { error &&
                 <h2> Ошибка: {error} </h2>
             }
             { loading
               ? <h2>Идёт загрузка...</h2>
               : Todos.map( todo => 
                    <div 
                      className = {'List-child'}
                      key = { todo.id }
                      >
                        <h3>{ todo.id }</h3>
                        <h2>{ todo.title }</h2>
                        <span>{ JSON.stringify( todo.completed ) }</span>
                    </div>
                 )
              }
            </div>
    )
}


export default Request;