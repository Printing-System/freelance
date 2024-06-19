import User from "../models/user.model.js";
import AppError from "../utils/error.utils.js";

const register = async (req,res,next) => {
    const { fullName , email , password} = req.body;

    if(!fullName || !email || !password){
        return next(new AppError('All field are required'))
    }

    const userExists = await User.findOne({ email });

    if(userExists){
        return next(new AppError('Email already exists' ,400));
    }

    const user = await User.create({
        fullName,
        email,
        password,
    });

    if(!user){
        return next(new AppError('User registration failed , please try again'))
    }

};

export{
    register,
}