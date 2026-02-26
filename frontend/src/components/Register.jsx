"use client"
import React, { useState } from 'react'
import Label from '../utils/Label'
import Input from '../utils/Input'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit(e) {
	}

	return (
        <div className='pt-32'>
            <div className="h-166.25 w-full flex justify-center items-center">
                <div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-slate-200 shadow-md rounded-md'>
                    <div className='h-full'>
                        <h1 className='flex font-bold text-3xl justify-center'>Registation</h1>
                        <form 
                            className='w-full h-5/6 pt-3 gap-2'
                            onSubmit={handleSubmit}>
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

                                <p className='text-red-500'>{/* error placeholder */}</p>
                                <p>Already have an account?	<Link to={'/login'} className='text-blue-500'>LogIn</Link></p>
                            </div>
                            <Button name={"Submit"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Register