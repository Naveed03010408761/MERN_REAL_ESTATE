import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import  User from "../model/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";


const generateAccessAndRefreshToken = asyncHandler( async (userId)=>{
   try {
     const user = await findById(userId)
 
     const accessToken = user.generateAccessToken();
     const refreshToken = user.generateRefreshToken();
 
     user.refreshToken = refreshToken;
     await user.save({validateBeforeSave:false});
     return {accessToken,refreshToken};
   } catch (error) {
    throw new ApiError(400,"user not found")
   }

})

const registerUser = asyncHandler( async (req,res)=>{
    const { fullName, username, email, password } = req.body;

if([fullName, username, email, password].some((field) => field.trim() === "")){
    throw new ApiError(400 ,"All fields are required");
}

const existedUser = await User.findOne({
    $or: [
        {username},{email}
    ]
})

if(existedUser){
    throw new ApiError(400, "user already existed");
}

const avatarLocalFilePath = req.files?.avatar[0]?.path;

if(!avatarLocalFilePath){
    throw new ApiError(400,"file path not found");
}

const avatar = await uploadOnCloudinary(avatarLocalFilePath);

const user = await User.create({
    fullName,
    username,
    email,
    password,
    avatar: avatar.url
})

if(!user){
    throw new ApiError(400, "user creation failed");
}

const createdUser = await User.findById(user._id).select("-password -refreshToken");

if(!createdUser){
    throw new ApiError(400,"user not created");
}

return res
.status(200)
.json( new ApiResponse(200,createdUser,"User registered successfully"));

})

const loginUser = asyncHandler( async (req,res)=>{
    const {username, email, password} = req.body;

    if(!(username || email)){
        throw new ApiError(400,"All fields are required");
    }

    const user = await User.findOne({
        $or: [
            {email},{username}
        ]
    })

    if(!user){
        throw new ApiError(400,"user not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid password");
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

    const createdUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken", refreshToken,options)
    .json( new ApiResponse(200,createdUser,"Loged in successfully"));

})

const logoutUser = asyncHandler( async (req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            refreshToken: undefined
        },
        {
            new: true
        }

    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,"user logged out successfully")
    )
})

const refreshAccessToken = asyncHandler( async (req,res)=>{
    const incomingRefreshToken = req.cookie.refreshToken;

    if(!incomingRefreshToken){
        throw new ApiError(400,"refresh token not found");
    }

    const decodedToken = await jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)

    const user = await User.findById(user._id);

    if(!user){
        throw new ApiError(400,"user not found");
    }

    if(incomingRefreshToken !== user.refreshToken){
        throw new ApiError(400,"refresh token not matched");
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    const {accessToken, newRefreshToken} = await generateAccessAndRefreshToken(user._id);

    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",newRefreshToken,options)
    .json(
        new ApiResponse(200,{accessToken,refreshToken:newRefreshToken},"token refreshed successfully")
    )
})

const changeCurrentPassword = asyncHandler( async (req,res) =>{
    const {oldPassword, newPassword} = req.body;

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400, "wrong password");
    }

    user.password = newPassword;
    await user.save({validateBeforeSave:false});

    return res
    .status(200)
    .json(
        new ApiResponse(200,"password changed successfully")
    )
})

const updateAccoundDetails = asyncHandler( async (req, res)=>{
    const {userName, email} = req.body;

    if(!(email || userName)){
        throw new ApiError(400 , "all fields are required");
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
       $set: {
            userName,
            email
        }
    },
    {
        new: true
    }
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,"details updated successfully")
    )
})



export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    updateAccoundDetails
}






































































