import { useState } from 'react'
import './App.css'

import Inicio from './pages/Inicio'
import Caracteristicas from './pages/Caracteristicas'
import Historia from './pages/Historia'
import Layout from './layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>} />
          <Route path="caracteristicas" element={<Caracteristicas/>} />
          <Route path="historia" element={<Historia/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
