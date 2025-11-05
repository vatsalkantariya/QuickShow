import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:id" element={<MoviesDetails/>} />
      <Route path="/movies/:id/:date" element={<MoviesDetails/>} />
    </Routes>
    </>
  )
}

export default App