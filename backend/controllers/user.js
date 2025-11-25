import { User } from "../models/userModal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login=async(req,res)=>{
  
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:"false"
            })
        };

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false,
            })
        }

        const isMatch=await bcryptjs.compare(password,user.password);
        if(!isMatch){
          return res.status(401).json({
            message:"Invalid email or password",
            success:"false",
          })
        };
       
        // const tokenData={
        //     id:User._id,
        // }


        const token=await jwt.sign("token","asdfdsfsfsfdfdsfdsfdfd",{expiresIn:"1d"});
        return res.status(200).cookie("token",tokenData,{httpOnly:true}).json({
            message:`Welcome back ${User.fullName}`,
            success:true,
            
        }); 
        

    }catch(error){
        
      console.log(error);
       

    }


}


export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already used" });
    }

    const hashedPassword=await bcryptjs.hash(password,16);




    await User.create({ fullName, email, password:hashedPassword });

    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
