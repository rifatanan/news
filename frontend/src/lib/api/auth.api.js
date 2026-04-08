import axios_instance from "../axios.intance"

export const userRegister = async (userData) => {
    try {
        const response = await axios_instance.post('register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
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
    try {
        const response = await axios_instance.post('create-news', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
