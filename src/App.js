import React, { useState } from 'react';
import './App.css';
import { useInput } from './hooks/useInput';

function App() {

 const username = useInput ('')
 const userpass = useInput ('')
 console.log(username);

  return (
    <div className={"App"}>
     <input
          {...username}
          type='text' 
          placeholder='Имя'     />
     <input
          {...userpass}
          type='password' 
          placeholder='Пароль'  />
    </div>
  )
}

export default App;
