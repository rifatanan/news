import authConfigs from "../configs/auth.config.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt"


const register = async(request, response) =>{
    try {
        const {name, email, password, } = request.body;
        const exituser = await User.findOne({email});

        if(exituser){
            return response.status(201).json({
                success:true,
                message: "User alredy exit. please login",
            })
        }

        const user = await User.create({name, email, password});
        
        response.status(201).json({
            success:true,
            message: "User created successfully.",
            data: user
        })

    } catch (error) {
        response.status(500).json({
            success:false,
            message: "Something went wrong in"+error,
        })
    }
}

const login = async(request, response) =>{
    try {
        const { email, password } = request.body;
        const user = await User.findOne({email});

        if(!user){
            return response.status(404).json({
                success:false,
                message:"Falied to login."
            })
        }

        const isMatched = await bcrypt.compare(password, user?.password);
        if(!isMatched){
            return response.status(404).json({
                success:false,
                message:"Wrong Password."
            })
        }else{
            const token = authConfigs.encodeToken(user?.email, user?.id.toString());
            response.cookie("user-token", token);

            response.status(200).json({
                success:true,
                message:"Successfully loged in.",
                user:{
                    id:user?._id,
                    email: user?.email,
                },
                token: token
            })
        }

    } catch (error) {
        response.status(500).json({
            success:false,
            message:"Something went wrong.",
            error:error.toString(),
        })
    }
}

const userController = {
    register,
    login,
}

export default userController;