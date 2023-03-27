const express =require("express")
const {connection}=require("./config/db");
const {log}=require("./config/loges")
//const {UserModel}=require("../models/user.model")
const {userRouter}=require("./routers/user.route")
const {APIRouter}=require("./routers/fetchAPI")

const {createClient}=require('redis');

const client = createClient();

const app=express();

require ("dotenv").config()
app.use(express.json())
app.use(log)
app.get("/",(req,res)=>{
    res.send(" home page")
})

app.use("/data",APIRouter)
app.use("/user",userRouter)




/////////////////////port runig
const PORT=process.env.port
app.listen(PORT,async(req,res)=>{
    try{
        await connection
        await client.connect();
        console.log("Connected to DB")
    }
    catch(err){
        console.log({"msg":"Not connected DB","error":err.message})

    }
    console.log(`Server running in ${PORT}`)
})