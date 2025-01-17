import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
// dot env configuration
dotenv.config();

// allow json as a input to the backend
// body parser
app.use(express.json());

// cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

// extracting cookies from the browser
app.use(cookieParser());

// mongodb connection
const connectTODB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB is connected');
    } catch (err) {
        console.error(`MongoDB connection error ${err}`);
        throw err;
    }
}

connectTODB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


// middleware to handle the errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
