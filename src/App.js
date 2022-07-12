import React, { useState } from 'react';
import './App.css';
import Hover from './components/Hover';
import Inputs from './components/Inputs';
import TodoList from './components/TodosList';


function App() {

 

  return (
    <div className={"App"}>
      <Inputs />
      <Hover  />
      <TodoList />
    </div>
  )
}

export default App;
