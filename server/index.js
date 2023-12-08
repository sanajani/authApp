import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';

// program routes created
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

// import database
import connection from './db/connect.js';
connection();

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 9011

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
})

// routes used in the application
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
        
    })
})