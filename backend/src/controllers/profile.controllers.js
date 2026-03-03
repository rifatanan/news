import Profile from "../models/profile.model.js";

const profile = async(request, response) =>{
    const authHeader = request.headers.authorization;
    console.log('auth header',authHeader);
    

    if (!authHeader) {
        return response.status(401).json({ message: "No token provided" });
    }

    // "Bearer TOKEN" → TOKEN
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_KEY);
        response.user = decoded; 
        console.log('token decoded:', decoded);
        
        return response.user;
    } catch (err) {
        return response.status(401).json({ message: "Invalid token" });
    }
}


const profileControllers = {
    profile,
}

export default profileControllers;