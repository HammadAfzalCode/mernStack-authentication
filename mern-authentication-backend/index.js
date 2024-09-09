import dotenv from 'dotenv'
import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from './route/auth.route.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;



app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    connectDB();
    console.log("Server is listening on port:", PORT);
});



