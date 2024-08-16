import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
// dot env configuration
dotenv.config();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
});
