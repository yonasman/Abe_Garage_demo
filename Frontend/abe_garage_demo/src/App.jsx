import './App.css'
import {Routes, Route} from "react-router"
import Home from "./Pages/Home/Home"
import AddEmployee from './Pages/AddEmployee/AddEmployee'
import Login from './Pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-employee" element={<AddEmployee/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App
