import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../utils/Button';
import useAuthStore from '../stores/auth.store';
import { useState, useRef, useEffect } from "react";


const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname;
    const { userName, userEmail, clearToken, isAuthenticated } = useAuthStore((state) => state)

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setOpen(false);
    }, [isAuthenticated]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogOut = () => {
        clearToken();
        navigate('/');
    }

    return (
        <nav className='fixed w-[90%]'>
            <div className='h-20 bg-slate-200 w-full flex justify-between items-center'>
                <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>

                <div className="flex justify-between gap-2">
                   
                    { !isAuthenticated &&
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
                    }

                    {isAuthenticated  &&
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center'>
                                <Link to="/create-news" className='hover:underline'>Create News</Link>
                            </div>
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                        {/* Profile Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            {userName}
                        </button>

                        {/* Dropdown Box */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg p-4">
                                <p className="text-sm text-gray-500 mb-3">{userEmail || ''}</p>
                                <button
                                    onClick={() => handleLogOut() }
                                    className="w-full px-3 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                        </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar
