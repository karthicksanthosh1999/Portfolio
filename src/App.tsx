import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import About from './Screens/About'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </>
  )
}

export default App
