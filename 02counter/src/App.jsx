import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // counter is a variable 
  // setCounter is a function which is responsible for the updation of counter variable.
  let [counter, setCounter] = useState(15)
  // let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    console.log("I am working", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
    console.log("I am working", counter-1);
  }

  return (
    <>
      <h1>Hello there!</h1>
      <h2>Counter value: {counter}</h2>
      <br />

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>

      <p>Footer: {counter}</p>

    </>
  )
}

export default App
