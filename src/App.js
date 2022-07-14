import React  from 'react';
import './App.css';
import Debounce from './components/Debounce';
import DocList from './components/DocList';
import Hover from './components/Hover';
import MyInput from './components/MyInput';


function App() {

 

  return (
    <div className={"App"}>
      <h2> useInput </h2>
      <MyInput  />
      <h2> useHover </h2>
      <Hover    />
      <h2> useScroll </h2>
      <DocList  />
      <h2> useDebounce</h2>
      <Debounce />
    </div>
  )
}

export default App;
