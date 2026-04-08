import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleNews } from '../lib/axios';

const NewsDetails = () => {
    const { newsId } = useParams();
    const [ newsData, setNewsData] = useState(null);

    useEffect(() => {
        const fetchSingleNews = async () => {
            try {
                const data = await getSingleNews(newsId);
                setNewsData(data.data);
            } catch (error) {
                console.error("Error fetching single news:", error);
            }
        };

        if (newsId) {
            fetchSingleNews();
        }
    }, [newsId]);

    return (
        <div className='w-full mt-10 flex justify-center items-center'>
            <div className='w-full flex flex-col gap-5 items-center'>
                <h1>{newsData?.short_description}</h1>
                <img src={newsData?.imageURL} alt={newsData?.short_description} className='w-full bg-contain'/>
                <p>{newsData?.description}</p>
            </div>            
        </div>
    )
}

export default NewsDetails
