import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Home from './components/Home'
import SubNavBar from './components/SubNavBar'
import Login from './components/Login'
import { useLocation } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import PrivateRoute from './routes/PrivateRoute'
import CreateNews from './components/CreateNews'
import NewsDetails from './components/NewsDetails'
import useAuthStore from './stores/auth.store'
import Category from './components/Category'

const App = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { categoryOption } = useAuthStore((state) => state);

    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto'>
                <NavBar />
                {currentPath !== '/login' && currentPath !== '/register' && <SubNavBar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/login" element={<Login />} /> 
                    {categoryOption.map((item) => (
                        <Route key={item.path} path={item.name} element={ <Category name={item.name} path={item.path} />} />
                    ))}
                    <Route element={<PrivateRoute />}>
                        <Route path="/create-news" element={<CreateNews />} />
                    </Route>
                    <Route path="/news/:newsId" element={<NewsDetails />} />
                </Routes>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default App
