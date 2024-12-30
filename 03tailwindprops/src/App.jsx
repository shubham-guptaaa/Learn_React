import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    user: 'shubham',
    age: 22
  }
  return (
    <>
      <h1 className='p-4 mb-4 text-black bg-green-400 rounded-xl'>Tailwind Test</h1>
      <Card channel="shubham" someObje={myObj}/>
      <Card/>
    </>
  )
}

export default App
