import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

const url = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:27017/${process.env.DATABASE_NAME}?authSource=admin`

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(url);
        console.log(`MongoDB Connection: ${connect.connection.host}`);
        console.log(`Database Name: ${connect.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

export default connectMongoDB;