import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

// program routes created
import userRouter from './routes/user.route.js'

// import database
import connection from './db/connect.js';
connection();

const app = express();
const PORT = process.env.PORT || 9011


// routes used in the application
app.use('/api/user',userRouter)

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
})
