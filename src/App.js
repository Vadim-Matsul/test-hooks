import React, { useState } from 'react';
import './App.css';
import Hover from './components/Hover';
import Input from './components/Input';
import TodosList from './components/TodosList';



function App() {

 

  return (
    <div className={"App"}>
      <Input     />
      <Hover     />
      <TodosList />
    </div>
  )
}

export default App;
