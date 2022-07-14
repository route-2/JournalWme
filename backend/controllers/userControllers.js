
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler(async(req,res) => { // async func to make requests to mongodb 
    const {name,email,password,pic} = req.body; // accepting these from the user
    const userExists = await User.findOne({email}); // checking if the user already exists
    
    if(userExists){
        res.status(400) // if the user already exists
        throw new Error("User already exists");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic
    }); // creating the user
    
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,

    });
}
else {
    res.status(400);
    throw new Error("User not created");
    
}
   
});
module.exports= {registerUser};