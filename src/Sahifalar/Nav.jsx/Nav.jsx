import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className='w-[100%] h-[80px] bg-[royalblue] text-[27px] font-[600] text-[white] items-center justify-between px-[40px] flex'>
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/admin'}>
                Admin
            </NavLink>
        </nav>
    )
}

export default Nav