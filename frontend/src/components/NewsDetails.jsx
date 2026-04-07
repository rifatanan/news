import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleNews } from '../lib/api/auth.api';

const NewsDetails = () => {
    const { newsId } = useParams();
    const [ newsData, setNewsData] = useState('');

    useEffect( async()=>{
        const singNewsData = await getSingleNews(newsId);
        setNewsData(singNewsData);
    }, [])


    console.log(newsId);
    console.log(newsData);

    return (
        <div>
            
        </div>
    )
}

export default NewsDetails
