import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../utils/Button';

const NavBar = () => {
  return (

    <nav className='fixed w-[90%]'>
        <div className='h-20 bg-red-200 w-full flex justify-between items-center'>
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
            <div className='flex gap-3'>
                <Link to="/login" className='hover:underline'>
                <Button name="Login" /></Link>
                <Link to="/register" className='hover:underline'>
                <Button name="Register" /></Link>
            </div>
        </div>
    </nav>

  )
}

export default NavBar
