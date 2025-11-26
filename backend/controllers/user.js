import { User } from "../models/userModal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Invalid data",
        success: false
      });
    }

    // Find user in DB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false
      });
    }

    // Compare hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false
      });
    }

    // Create JWT token
    const tokenData = { id: user._id };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET || "asdfdsfsfsfdfdsfdsfdfd", { expiresIn: "1h" });

    // Send cookie and response
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
        secure:true,
        sameSite:"none",
        user:{
         fullName:user.fullName,
         email:user.email,
         _id:user._id,
        }
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};




export const Logout=async(req,res)=>{
  
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out succesfully",
        success:true,
    })

}


export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Invalid data", success: false });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already used", success: false });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({ fullName, email, password: hashedPassword });

    return res.status(201).json({
      message: "Account created successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

