import {Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  User, {  UserModel }  from '../models/user.model';
import asyncHandler from 'express-async-handler';
import { BAD_REQUEST, SUCCESS } from '../constants/http_status';
const router =Router();

router.get('',asyncHandler(async(req,res)=>{
    const users=['sreekanth','venisha','manasa'];
     const doc = await User.find({}); //it also works
    // const doc=await User.countDocuments();
    res.status(SUCCESS).send(doc)
}))
router.post('/login',asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    const encryptedPassword=user?.password||'';
    if(user&& await bcrypt.compare(password,user.password)){
         console.log(encryptedPassword,'sreekanth');
        res.send(generateToken(user))
    }else{
        res.status(BAD_REQUEST).send("USER NAME OR PASSWORD IS INVALID")
    }

}))
router.post('/create',asyncHandler(async(req,res)=>{
    const newUser=req.body;
    const {email,password}=req.body;
    const hashPassword=await bcrypt.hash(password,10);
     newUser.password=hashPassword;
    const user=await User.findOne({email});
    if(user){
         res.status(BAD_REQUEST)
        .send("User already exist");
        return;
    }
    const article = new User(newUser);
    const userData=await article.save();
    res.status(SUCCESS).send(generateToken(userData))
}))

export const generateToken=(user:UserModel)=>{
    const token=jwt.sign(
        {
            id:user.id,email:user.email,isAdmin:false
        },'srekeanth',
        {
            expiresIn:'30d'
        }
    )
    return {
    userName:user.userName,
    email:user.email,
    password:user.password,
    token:token
    }
}




export default router;