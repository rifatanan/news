import authConfigs from "../configs/auth.config.js";

const validateUser = (request, response, next) =>{
    const token = request.cookies["user-token"];
    const decodeToken = authConfigs.decodeToken(token);

    if(decodeToken === null){
        return response.status(401).json({
            message:"Invalid User...Login first."
        })
    }else{
        request.headers.email = decodeToken["email"];
        request.headers._id = decodeToken["id"];
        next();
    }
}

export default validateUser;