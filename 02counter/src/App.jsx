import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks == import {useState} from 'react' 
  let [counter, setCounter] = useState(5)  //setCounter is a reference. you can change it like i , shubham etc

  // let counter = 5
  const addValue = () => {
    // console.log("Value added", Math.random());
    // counter = counter + 1;
    setCounter(counter + 1)
    // console.log("Click", counter);
  }
  const remValue = () => {
    setCounter(counter-1)
   //Home work
  //  if remove==0 don't change  
  }
  return (
    <>
      <h1>React sikho vite say</h1>
      <h2>Counter value: {counter}</h2>
      <button 
        onClick={addValue}>
        Add value {counter}</button>
      <br />
      <button
      onClick = {remValue}>
        Remove Value {counter}</button>

    </>
  )
}

export default App
