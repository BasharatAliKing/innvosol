import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './Pages/Home';
import "../src/utilities/Home.css";
import Services from './Pages/Services';
import Carrier from './Pages/Carrier';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Process from './Pages/Process';
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route> 
          <Route exact path='/Home' element={<Home/>} ></Route>
          <Route exact path='/Services' element={<Services/>}></Route>
          <Route exact path='/Carrier' element={<Carrier/>}></Route>
          <Route exact path='/Contact-Us' element={<Contact/>}></Route>
          <Route exact path='/About-Us' element={<About/>}></Route>
          <Route exact path='/Process' element={<Process/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
