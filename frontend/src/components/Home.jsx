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
        navigate(`/${news.category}/${id}`);
    };

    const groupedData = (news || []).reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="pt-10">
            <div className="w-full h-150 flex gap-4">

                {/* Left Side */}
                <div
                    className="w-1/2 overflow-hidden relative cursor-pointer"
                    onClick={() => handleItemClick(news[0]?._id)} 
                >
                    <img
                        src={news[0]?.imageURL}
                        alt={news[0]?.short_description}
                        className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col justify-between ">
                        <p className='absolute top-4 left-4 text-white font-bold'>{news[0]?.category}</p>
                        <div className='absolute bottom-0 left-0 right-0 from-black to-transparent p-4'>
                            <div className='flex text-white' >
                                <p className="">{news[0]?.authorName} - </p>
                                <p>{news[0]?.updatedAt}</p>
                            </div>
                            <h1 className="text-white text-[36px] font-bold capitalize">{news[0]?.short_description}</h1>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex flex-col gap-4">

                    {/* Top Section */}
                    <div className="flex flex-1 gap-4 min-h-0">

                        <div className="flex-1 overflow-hidden relative  cursor-pointer"
                            onClick={() => handleItemClick(news[1]?._id)} 
                        >
                            <img
                                src={news[1]?.imageURL}
                                alt={news[1]?.short_description}
                                className="w-full h-full object-cover"
                            />
                            <div className="flex flex-col justify-between ">
                                <p className='absolute top-4 left-4 text-white font-bold'>{news[1]?.category}</p>
                                <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                    <div className='flex text-white' >
                                        <p className="">{news[1]?.authorName} - </p>
                                        <p>{news[1]?.updatedAt}</p>
                                    </div>
                                    <h1 className="text-white text-[36px] font-bold capitalize"> {news[1]?.short_description} </h1>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 overflow-hidden relative cursor-pointer"
                            onClick={() => handleItemClick(news[0]?._id)}
                        >
                            <img
                                src={news[2]?.imageURL}
                                alt={news[2]?.short_description}
                                className="w-full h-full object-cover"
                            />
                            <div className="flex flex-col justify-between ">
                                <p className='absolute top-4 left-4 text-white font-bold'>{news[2]?.category}</p>
                                <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                    <div className='flex text-white' >
                                        <p className=""> {news[2]?.authorName} - </p>
                                        <p> {news[2]?.updatedAt} </p>
                                    </div>
                                    <h1 className="text-white text-[36px] font-bold capitalize"> {news[1]?.short_description} </h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div
                        className="flex-1 overflow-hidden min-h-0 relative cursor-pointer"
                        onClick={() => handleItemClick(news[0]?._id)}
                    >
                        <img
                            src = { news[2]?.imageURL }
                            alt = { news[2]?.short_description }
                            className="w-full h-full object-cover"
                        />
                        <div className="flex flex-col justify-between ">
                            <p className='absolute top-4 left-4 text-white font-bold'> {news[2]?.category} </p>
                            <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                                <div className='flex text-white' >
                                    <p className=""> {news[2]?.authorName} - </p>
                                    <p> {news[2]?.updatedAt.split("T")[0]} </p>
                                </div>
                                <h1 className="text-white text-[36px] font-bold capitalize"> {news[1]?.short_description} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-8xl py-8 space-y-12">
                {Object.entries(groupedData).map(([category, items]) => (
                    <div key={category}>
                    <h2 className="text-2xl font-bold capitalize mb-6 border-b pb-2">
                        {category}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {items.slice(0, 6).map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                            src={item.imageURL}
                            alt={item.category}
                            className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                            <p className="text-sm text-blue-500 font-medium mb-1 capitalize">
                                {item.category}
                            </p>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.short_description}
                            </h3>

                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                By {item.authorName}
                                </span>

                                <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                                onClick={() => handleItemClick(item._id)} >
                                Read More
                                </button>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Home
