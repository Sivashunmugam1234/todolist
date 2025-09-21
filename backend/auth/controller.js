const { findUser,createUser } = require("../models/signupmodel");
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');


const SECRET_KEY=process.env.SECRET_KEY;


// const usermodel=require(findUser)

exports.signup=async(req,res)=>{
    console.log(req.body);
    
    const {username,nickname,password}=req.body;
   
    try{
        const existuser=await findUser(username);
        if(existuser){
            return res.status(400).json({error:"user already exist"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newuser=await createUser({username,nickname,password:hashedPassword});
        res.status(201).json(newuser);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"})

    }
}

exports.login=async(req,res)=>{
    console.log(req.body);
    const{username,password}=req.body;

    try{
        const existUser=await findUser(username);
        if(!existUser){
            return res.status(400).json({error:"user not found"});
        }
        const match=await bcrypt.compare(password,existUser.password);
        if(!match){
            return res.status(400).json({error:"incorrect password"});
        }
        const payload={
            username:existUser.username,
            nickname:existUser.nickname
        }
        const token =jwt.sign(payload,SECRET_KEY,{expiresIn:'48h'});
        res.status(200).json({message:"login successful",token,user:{username:existUser.username,nickname:existUser.nickname}})
    }
    catch(err){
        console.log(error);
        res.send(500).json("Internal server error");
        
    }
    
};