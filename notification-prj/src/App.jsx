import { useState } from 'react'
import { Toastcontainer } from './Toastcontainer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Toast</h1>
    <Toastcontainer/>
    
     
    </>
  )
}

export default App
