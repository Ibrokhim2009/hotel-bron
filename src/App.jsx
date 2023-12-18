import { Route, Routes } from "react-router-dom"
import Home from "./Sahifalar/Home.jsx/Home"
import Admin from "./Sahifalar/Admin/Admin"
import Main from "./Sahifalar/Main.jsx/Main"
import Nav from "./Sahifalar/Nav.jsx/Nav"



function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Admin />} path="admin" />
      </Routes>
    </div>
  )
}

export default App
