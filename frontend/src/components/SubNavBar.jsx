import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const subNavBar = [
    { name: "Home", path: "/" },
    { name: "International", path: "/international" },
    { name: "Sports", path: "/sports" },
    { name: "Business", path: "/business" },
    { name: "Technology", path: "/technology" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Health", path: "/health" },
    { name: "Science", path: "/science" }
]

const SubNavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="pt-30">
            <div className='flex font-[--font-oswald] text-xl text-white bg-black'>
                {subNavBar.map((item) => (
                    <Link key={item.name} to={item.path} className={`text-2xl hover:bg-red-300 px-4 py-5 ${currentPath === item.path ? 'bg-[#F65050] underline' : ''}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SubNavBar
