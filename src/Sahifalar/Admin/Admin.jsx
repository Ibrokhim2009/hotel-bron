import React, { useContext, useState } from 'react'
import { Context } from '../../App'
import { nanoid } from 'nanoid'

function Admin() {
  const { setProd, prod } = useContext(Context)
  const addFlight = e => {
    e.preventDefault()
    const forma = new FormData(e.target)
    const { title, Fshahar, Sshahar, data, } = Object.fromEntries(forma.entries())
    const newProd = {
      title,
      Fshahar,
      Sshahar,
      data,
      id: nanoid()
    }
    setProd([...prod, newProd])
  }
  return (
    <form onSubmit={addFlight}>
      <input type="text" name="title" placeholder='Your name' id="" />
      <input type="text" name="Fshahar" id="" placeholder='From fist country ...' />
      <input type="text" name="Sshahar" placeholder='To second country ...' id="" />
      <input type="date" name="data" id="" />
      <button>Add</button>
    </form>
  )
}

export default Admin