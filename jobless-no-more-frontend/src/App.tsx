import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header/>
    </div>
  )
}

export default App
