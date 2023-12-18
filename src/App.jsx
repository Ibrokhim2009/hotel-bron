import { Route, Routes } from "react-router-dom"
import Home from "./Sahifalar/Home.jsx/Home"
import Admin from "./Sahifalar/Admin/Admin"
import Nav from "./Sahifalar/Nav.jsx/Nav"
import { createContext, useEffect, useState } from "react"

export const Context = createContext()
function App() {
  const [prod, setProd] = useState(JSON.parse(localStorage.getItem('prod')) || [])
  useEffect(() => {
    localStorage.setItem('prod', JSON.stringify(prod))
  }, [prod])
  return (
    <>
      <Context.Provider value={{ prod, setProd }}>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Admin />} path="admin" />
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
