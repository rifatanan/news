import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Home from './components/Home'
import SubNavBar from './components/SubNavBar'
import International from './components/International'
import Sports from './components/Sports'
import Business from './components/Business'
import Technology from './components/Technology'
import Science from './components/Science'
import Login from './components/Login'
import { useLocation } from 'react-router-dom';
import Entertainment from './components/Entertainment'
import Health from './components/Health'


const App = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const routeDirectory = [
        {path:"/",component: <Home />},
        {path:"/international",component: <International />},
        {path:"/sports",component: <Sports />},
        {path:"/business",component: <Business />},
        {path:"/technology",component: <Technology />},
        {path:"/entertainment",component: <Entertainment />},
        {path:"/health",component: <Health />},
        {path:"/science",component: <Science />}
    ]

    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto'>
                <NavBar />
                {currentPath !== '/login' && currentPath !== '/register' && <SubNavBar />}
                <Routes>
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/login" element={<Login />} /> 
                    {routeDirectory.map((item) => (
                        <Route key={item.path} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </div>
        </div>
    )
}

export default App
