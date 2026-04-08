import dotenv from 'dotenv'
import express from 'express';
import cors from'cors'
import cookieParser from 'cookie-parser';
import connectMongoDB from './configs/database.config.js';
import userRoutes from "./routes/user.routes.js";
import newsRoutes from "./routes/news.route.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
    origin: FRONTEND,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

connectMongoDB();

app.use('/api', newsRoutes)
app.use("/api", userRoutes);

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
})