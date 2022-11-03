import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App