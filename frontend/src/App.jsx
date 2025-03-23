import React from 'react'
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'

const App = () => {
  return (
    <main className='overflow-hidden bg-primary'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </main>
  )
}

export default App