import express from "express";
const app = express();
const Port = 3001
app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})