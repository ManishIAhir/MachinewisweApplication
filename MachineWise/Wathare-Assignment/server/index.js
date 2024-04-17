import express from  "express";
import { config } from "dotenv"; 
import  cors from 'cors'; 
import connectToDatabase from "./config.js";
import Name from "./dummy.model.js";
const PORT = 8080;
const app = express();
config();

app.use(cors());
app.use(express.json());
app.get('/get-dummydata', async(req, res)=>{
    try {
        const data = await Name.find();
        if(!data){
            res.status(404).json({statu : false, message: "Data not found"});
        }
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
    
})

app.all('*', (req, res)=>{
    res.status(404).send("Page not found !!!!");
})

app.listen(PORT, async()=>{
    await connectToDatabase();
    console.log(  `Server is running on ${PORT}`)
})