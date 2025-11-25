import { User } from "../models/userModal.js";
import bcryptjs from "bcryptjs";

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
