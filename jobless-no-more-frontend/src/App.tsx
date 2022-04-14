import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
    </Routes>
    </div>
  )
}

export default App
