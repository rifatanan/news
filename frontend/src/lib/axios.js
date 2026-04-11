import axios_instance from './axios.intance.js';

export const getAllNews = async () => {
    try {
        const response = await axios_instance.get('all-news');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}  

export const getSingleNews = async (singleData) => {
    try {
        const response = await axios_instance.get(`single-news/${singleData}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getCategoryNews = async (categoryData) => {
    try {
        const response = await axios_instance.get(`category-news/${categoryData}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}