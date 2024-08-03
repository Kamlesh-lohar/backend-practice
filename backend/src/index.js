import dotenv from 'dotenv'
import connectDb from "./database/database.js";
import app from './App.js';
// const app = express();
dotenv.config({
    path:'./env'
})
app.get('/', (req, res) => {
    res.json({ message: 'Hello, MERN Stack!' });
  });

connectDb().then(
    ()=>{
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server chalu thai gyu aa port par: ${process.env.PORT} -file index.js`);
        })
        app.on('error', (error)=>{
            console.log("ERRR:", error);
            throw error
        })
    }
).catch((err)=>{
    console.log("MONGODB connect nathi thyu- file index.js",err );
});

