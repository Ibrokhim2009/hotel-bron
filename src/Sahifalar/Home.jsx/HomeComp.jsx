import React from 'react'

function HomeComp({ item }) {
    return (
        <div className='w-[200px] flex items-center flex-col py-[20px]  h-[200px] bg-[royalblue] text-[white] '>
            <h1 className='text-2xl '>{item?.name}</h1>
            <h2 className=''>{item?.Fshahar}dan</h2>
            <h2>{item?.Sshahar}ga</h2>
            <h4>{item?.data}</h4>
        </div>
            
    )
}

export default HomeComp