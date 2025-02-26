import express from "express";
import jokes from"./jokes.js"
let app = express()

app.get('/',(req,res)=>{
    res.send("server is redy")
    
})

// get a list of jokes 

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

const port =process.env.PORT|3000;

app.listen(port,(error)=>{
    if(error) throw error;
    console.log(`server at running at port : http://localhost:${port}`);
});