import React, { useState } from 'react';
import './App.css';
import Debounce from './components/Debounce';
import Hover from './components/Hover';
import Inputs from './components/Inputs';
import TodoList from './components/TodosList'


function App() {

 

  return (
    <div className={"App"}>
      <h2>useInput</h2>
      <Inputs   />
      <h2>useHover</h2>
      <Hover    />
      <h2>useScroll</h2>
      <TodoList />
      <h2>useDebounce</h2>
      <Debounce />
    </div>
  )
}

export default App;
