import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import router from "./routes/userRoute.js";


dotenv.config();        // Load env FIRST

databaseConnection();   // THEN connect database

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




/// API
app.use("/api/v1/user",router);
//  http://localhost:8080/api/v1/user/   When router hit this then it call this

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
