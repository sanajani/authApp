import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

// 

// import database
import connection from './db/connect.js';
connection();

const app = express();
const PORT = process.env.PORT || 9011

app.get('/',(req,res) => {
    res.json({
        message:"Api called"
    })
})

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
})
