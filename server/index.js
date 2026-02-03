import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectdb from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./socket/socket.js";
dotenv.config({});

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption)); 


// Define routes here
app.use("/api/d1/user",userRoute); 
app.use("/api/d1/message",messageRoute);

// Start the server
//http://localhost:8000/api/d1/user/register

app.listen(PORT, () => {
    connectdb();
  console.log(`Server is running on port ${PORT}`);
});