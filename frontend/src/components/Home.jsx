import { useEffect } from 'react'
import useAuthStore from '../stores/auth.store'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { news } = useAuthStore((state) => state);
    const fetchUsers = useAuthStore((state) => state.fetchUsers);
    const navigate = useNavigate();

    useEffect( () => {
        const getUsers = async () => {
            await fetchUsers();
        };

        getUsers();
    }, [])

    const handleItemClick = (id) => {
        navigate(`/news/${id}`);
    };

    return (
        <div className="pt-10">
            <div className="w-full h-150 flex gap-4">

                {/* Left Side */}
                <div
                    className="w-1/2 overflow-hidden relative cursor-pointer"
                    onClick={() => handleItemClick(news[0]?._id)} 
                >
                    <img
                        src="/1.png"
                        alt="1"
                        className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col justify-between ">
                        <p className='absolute top-4 left-4 text-white font-bold'>Business</p>
                        <div className='absolute bottom-0 left-0 right-0 from-black to-transparent p-4'>
                            <div className='flex text-white' >
                                <p className="">Description - </p>
                                <p>20 Dec 2020</p>
                            </div>
                            <h1 className="text-white text-[36px] font-bold capitalize">After all is said and done, more is done</h1>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex flex-col gap-4">

                    {/* Top Section */}
                    <div className="flex flex-1 gap-4 min-h-0">

                        <div className="flex-1 overflow-hidden relative">
                            <img
                                src="/2.png"
                                alt="2"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex flex-col justify-between ">
                                <p className='absolute top-4 left-4 text-white font-bold'>Business</p>
                                <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                    <div className='flex text-white' >
                                        <p className="">Description - </p>
                                        <p>20 Dec 2020</p>
                                    </div>
                                    <h1 className="text-white text-[36px] font-bold capitalize">After all is said and done, more is done</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-hidden relative">
                            <img
                                src="/3.png"
                                alt="3"
                                className="w-full h-full object-cover"
                            />
                            <div className="flex flex-col justify-between ">
                                <p className='absolute top-4 left-4 text-white font-bold'>Business</p>
                                <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                    <div className='flex text-white' >
                                        <p className="">Description - </p>
                                        <p>20 Dec 2020</p>
                                    </div>
                                    <h1 className="text-white text-[36px] font-bold capitalize">After all is said and done, more is done</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="flex-1 overflow-hidden min-h-0 relative">
                        <img
                            src="/4.png"
                            alt="4"
                            className="w-full h-full object-cover"
                        />
                        <div className="flex flex-col justify-between ">
                            <p className='absolute top-4 left-4 text-white font-bold'>Business</p>
                            <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                <div className='flex text-white' >
                                    <p className="">Description - </p>
                                    <p>20 Dec 2020</p>
                                </div>
                                <h1 className="text-white text-[36px] font-bold capitalize">After all is said and done, more is done</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
