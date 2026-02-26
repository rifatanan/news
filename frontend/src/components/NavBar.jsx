import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../utils/Button';

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <nav className='fixed w-[90%]'>
            <div className='h-20 bg-slate-200 w-full flex justify-between items-center'>
                <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
                <div className='flex gap-3'>
                    {
                        currentPath !== '/login' && 
                        <Link to="/login" className='hover:underline'>
                            <Button name="Login" />
                        </Link>
                    }
                    {
                        currentPath !== '/register' &&
                        <Link to="/register" className='hover:underline'>
                            <Button name="Register" />
                        </Link>
                    }
                </div>
            </div>
        </nav>

    )
}

export default NavBar
