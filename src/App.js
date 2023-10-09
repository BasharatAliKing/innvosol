import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home';
import "../src/utilities/Home.css";
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Home/>
        <Routes>
          <Route exact path='/' element={Home} />
        </Routes>
      </Router>
    </>
  )
}
