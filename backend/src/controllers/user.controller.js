    import authConfigs from "../configs/auth.config.js";
    import User from "../models/user.model.js";
    import bcrypt from "bcrypt"


    const register = async(request, response) =>{
        try {
            const { name, email, password } = request.body;

            const exitingUser = await User.findOne({email});
            if(exitingUser){
                return response.status(201).json({
                    success:true,
                    message: "User alredy exit. Please login",
                })
            }

            const newUser = await User.create({ name, email, password });

            const user = await User.findById(newUser._id).select("-password");

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
                return response.status(401).json({
                    success:false,
                    message: "Unkonwn user,Please Login First."
                })
            }

            const isMatched = await bcrypt.compare(password, user?.password);
            if(!isMatched){
                return response.status(401).json({
                    success:false,
                    message: "Invalid email or password."
                })
            }else{
                const token = authConfigs.encodeToken(user?.email, user?.id.toString());
                response.cookie("user-token", token);

                response.status(200).json({
                    success:true,
                    message:"Successfully loged in.",
                    user:{
                        id:user?._id,
                        name: user?.name,
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