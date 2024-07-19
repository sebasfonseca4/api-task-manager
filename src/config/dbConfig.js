import mongoose from "mongoose";

// Conexion a mongodb database

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
    }
}

export default connectDb;