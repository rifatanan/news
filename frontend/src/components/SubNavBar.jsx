import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAuthStore from '../stores/auth.store';

const SubNavBar = () => {
    const { categoryOption } = useAuthStore((state) => state);

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="pt-30">
            <div className='flex font-[--font-oswald] text-xl text-white bg-black'>
                {categoryOption.map((item) => (
                    <Link key={item.name} to={item.path} className={`text-2xl hover:bg-red-300 px-4 py-5 capitalize ${currentPath === item.path ? 'bg-[#F65050] underline' : ''}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SubNavBar
