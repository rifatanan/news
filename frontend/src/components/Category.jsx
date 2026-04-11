import React, { useEffect } from 'react';
import { getCategoryNews } from '../lib/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = (props) => {
    const [ data, setData ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryNews = async () => {
            try {
                const response = await getCategoryNews(props.name) ;
                setData(response)
            } catch (error) {
                console.error("Error fetching category news:", error);
            }
        };

        fetchCategoryNews();
    }, [props.name]);

    const handleItemClick = (id) => {
        navigate(`/news/${id}`);
    };

    const newsItems = data?.data;

    return (
        <div className="max-w-8xl py-8">
            {newsItems == null || newsItems.length === 0 ? (
                <div className="text-center text-gray-500 text-lg py-10">
                    No data
                </div>
            ) :(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {newsItems?.map((item) => (
                <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                >
                    <img
                        src={item.imageURL}
                        alt={item.short_description}
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-4">
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

                            <button
                                className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                                onClick={() => handleItemClick(item._id)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Category
