import express from "express"
const app = express();
const port = 3001


app.get("/", async (req, res)=>{
    await res.send("<h1>Home<h1>")
})

app.get("/about", async (req, res)=>{
    await res.send("<h1>About Me<h1>")
})
app.get("/contact", async (req, res)=>{
    await res.send("<h1>Contact Me<h1>")
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})