import React from 'react'
import Button from '../utils/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import toast from "react-hot-toast";
import useAuthStore from '../stores/auth.store';
import { userLogin } from '../lib/api/auth.api';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const { setToken, setUser, isAuthenticated } = useAuthStore((state) => state)

    useEffect(() => {
        if (isAuthenticated) navigate('/')
    }, [isAuthenticated, navigate])

    const handleChange = (e) =>{
        const {name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await userLogin(formData);
            console.log("Success:", data);
            if (data && data?.success === true) {
                if (data?.token) setToken(data?.token);
                if (data?.user) setUser( data?.user?.name, data?.user?.email);
                toast.success('Login Successfully!');
                navigate("/");
            } else {
                console.log('Error:', data?.message);
                toast.error(data?.message || "Login Failed.");
            }
        }
        catch (error) {
            console.log('Error:', error?.message);
            toast.error(error?.message || 'Login failed.');
        }
	}

    return (
        <div className='pt-32'>
            <div className="h-166 w-full flex justify-center items-center shadow-md ">
                <div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-slate-200 shadow-md rounded-md'>
                    <div className='h-full'>
                        <h1 className='flex font-bold text-3xl justify-center'>Welcome Back!</h1>
                        <h1 className='flex font-bold text-3xl justify-center'>Login to your account</h1>
                        <form onSubmit={handleSubmit} className='w-full h-5/6 pt-3 gap-2'>
                            <div className='grid grid-flow-row gap-2'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your Email"}
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your Password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>
                                Don't have an account?
                                <Link to="/register" className='text-blue-500 hover:underline'> Register</Link>
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
