

# 🚀 Fronted-Bakend Application Setup (React + Express.js)

This repository demonstrates how to connect a React frontend (Vite) with an Express.js backend using Vite's proxy feature—eliminating CORS issues!

# 🏗️ Tech Stack
Frontend: React.js (Vite) ⚛️
Backend: Express.js 🚀
Proxy: Vite Proxy for API requests 🔄

# 📂 Folder Structure
/project-root
  ├── /client  (React + Vite frontend)
  ├── /server  (Express.js backend)
  ├── package.json
  ├── README.md


 # 🔧 Backend Setup (Express.js)
* 1️⃣ Navigate to the server directory:
* 2️⃣ Install dependencies:
npm install express

* 3️⃣ Create a server.js file with a simple GET API route:

* code --
const express = require("express");
const app = express();
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


* 4️⃣ Start the backend:
node server.js


# 🎨 Frontend Setup (React + Vite)
* 1️⃣ Navigate to the client directory:

* 2️⃣ Install dependencies:
npm install axios

* 3️⃣ Set up the Vite proxy in vite.config.js:

export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API calls to Express
    },
    port: 3000, // Avoid conflicts by setting frontend to run on port 3000
  },
};


* 4️⃣ Update App.jsx to fetch data using axios:

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  // console.log(jokes);

  // let getUser =  () => {
    // by using them and catch method (prommise)
  //   fetch("/api/joke")
  //   .then( res=>res.json())
  //   .then(json=>setJokes(json));
  // }
  

// by using axios 
  useEffect(() => {
    // getUser();

    axios.get("/api/jokes")
    .then((res)=>{
      console.log(res)
      setJokes(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <div className="mainSec">
      <h1>Welcome to jokes Apart</h1>

      <p>Jokes: {jokes.length}</p>

     <div className="jockSec">
     {jokes.map((joke) => {
        return (
          <div className="jokeCont" key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
     </div>
    </div>

export default App;


* 5️⃣ Start the frontend:

npm run dev


# ✅ Running the Full Stack App
 *1️⃣ Start the backend

node server.js

* 2️⃣ Start the frontend
npm run dev

* 3️⃣ Open http://localhost:3000 in your browser 🎉

#💡 Key Features

* ✅ Vite Proxy: No need to manually set CORS in Express!
* ✅ Fast & Efficient: Vite ensures a lightning-fast development experience ⚡
* ✅ Seamless API Calls: Fetch data from the backend without exposing localhost:5000 in frontend

# 🔥 Want to Contribute?
* 1️⃣ Fork this repository 🍴
* 2️⃣ Clone your forked repo:
  git clone  go to this reop path http do copy past


# 🛠️ Troubleshooting
Getting a CORS error? The proxy should prevent it. Make sure the backend is running.


Port conflicts? If 3000 is in use, change it in vite.config.js.
Not fetching data? Restart both servers and clear the browser cache.