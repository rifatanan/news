import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className='fixed w-[90%]'>
        <div className='h-20 bg-red-200 w-full flex justify-between items-center'>
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
            <Link to="/register" className='hover:underline'>Register</Link>
        </div>
    </nav>

  )
}

export default NavBar
