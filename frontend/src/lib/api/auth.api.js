import axios_instace from "../axios.intance"

export const userRegister = async (userData) => {
    const response = await axios_instace.post('register', userData)
    return response.data;
}

export const userLogin = async (userData) => {
    const response = await axios_instace.post('login', userData)
    
    return response.data;
}