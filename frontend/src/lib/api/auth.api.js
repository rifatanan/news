import axios_instance from "../axios.intance"

export const userRegister = async (userData) => {
    const response = await axios_instance.post('register', userData);
    return response.data;
}

export const userLogin = async (userData) => {
    try {
        const response = await axios_instance.post('login', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const createNews = async (userData) => {
    const response = await axios_instance.post('create-news', userData);
    return response.data;
}

export const getAllNews = async () => {
    const response = await axios_instance.get('all-news');
    return response.data;
}  

export const getSingleNews = async (singleData) => {
    const response = await axios_instance.get('single-news', singleData);
    return response.data;
}