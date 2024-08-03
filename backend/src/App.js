import express from 'express'
const app= express();
import cors from 'cors'
import cookieParser from 'cookie-parser'
// app.use(cors({origin: process.env.CORS_ORIGIN, //you will need to add "CORS_ORIGIN" in the .env file
//     credentials:true
// }))
app.use(cors());
app.use(express.json({limit:"1mb"}))
app.use(express.urlencoded({extended:true, limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export default app;