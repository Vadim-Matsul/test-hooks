import React  from 'react';
import './App.css';
import Hover from './components/Hover';
import MyInput from './components/MyInput';


function App() {

 

  return (
    <div className={"App"}>
      <h2> useInput </h2>
      <MyInput />
      <h2> useHover </h2>
      <Hover   />
    </div>
  )
}

export default App;
