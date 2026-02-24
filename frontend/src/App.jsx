import NavBar from './components/NavBar'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import SubNavBar from './components/SubNavBar'

const App = () => {

  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto'>
        <NavBar />
        <SubNavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/international" element={<Home />} />
            <Route path="/sports" element={<Home />} />
            <Route path="/business" element={<Home />} />
            <Route path="/technology" element={<Home />} />
            <Route path="/entertainment" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
