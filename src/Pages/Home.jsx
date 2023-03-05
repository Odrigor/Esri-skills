import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import playground from './Playground'
import Playground from './Playground'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>


    <Route path='/' element={<div className="Home"> Home </div>}></Route>

    <Route path='pg' element={<Playground></Playground>} > </Route>

    <Route path='*' element={<div>Esto es como  un else cualquier ruta que noe xista va bien pera los 404</div>} ></Route>
    </Routes>

    </Router>
  )
}

export default Home
