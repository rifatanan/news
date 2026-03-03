import React from 'react'
import useAuthStore from '../stores/auth.store'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { isAuthenticated } = useAuthStore((state) => state)

    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    return <Outlet />
}

export default PrivateRoute
