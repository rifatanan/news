import React from 'react'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='pt-32'>
            <div className="h-166 w-full flex justify-center items-center shadow-md ">
                <div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-slate-200 shadow-md rounded-md'>
                    <div className='h-full'>
                        <h1 className='flex font-bold text-3xl justify-center'>Welcome Back!</h1>
                        <h1 className='flex font-bold text-3xl justify-center'>Login to your account</h1>
                        <form className='w-full h-5/6 pt-3 gap-2'>
                            <div className='grid grid-flow-row gap-2'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>name</label>
                                <input
                                    type="text"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your Name"}
                                    required={false}
                                />
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                <input
                                    type="password"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your Password"}
                                    required={false}
                                />
                            </div>
                            <p>
                                Don't have an account?
                                <Link to="/register" className='text-red-500 hover:underline'> Register</Link>
                            </p>
                            <Button name="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
