import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import router from "./routes/userRoute.js";

const app = express();
databaseConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions)); // handles all CORS + preflight

app.use("/api/v1/user", router);

//  Remove this line completely
// app.options("*", cors(corsOptions));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
