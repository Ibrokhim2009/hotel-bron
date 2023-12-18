import React, { useContext } from 'react'
import { Context } from '../../App'
import HomeComp from './HomeComp'

function Home() {
  const { prod } = useContext(Context)
  return (
    <>
      <h1>Ikinchi branch</h1>
      <div className='grid grid-cols-5 gap-[30px] px-[100px] py-[50px]'>

        {prod.map((item) => <HomeComp item={item} key={item.id} />)}
      </div>


    </>
  )
}

export default Home