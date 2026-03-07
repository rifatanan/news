import Profile from "../models/profile.model.js";

const profile = async(request, response) =>{
    const authHeader = request.headers.authorization;
    
    if (!authHeader) {
        return response.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_KEY);
        response.user = decoded; 
        
        return response.user;
    } catch (err) {
        return response.status(401).json({ message: "Invalid token" });
    }
}


const profileControllers = {
    profile,
}

export default profileControllers;