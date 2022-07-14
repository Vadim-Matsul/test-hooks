import { useEffect, useState } from "react";

export const useRequest = (request) => {
 const [    data, setData    ] = useState ([])
 const [ loading, setLoading ] = useState ( false )
 const [   error, setError   ] = useState ('')
  console.log(loading);

 useEffect (() => {
    setLoading ( true )
    request()
        .then    ( response => setData ( response.data ) )
        .catch   (    error => setError( error.message ) )
        .finally ( () => setLoading( false ) )
 },[])

 return [data, loading, error]
}