import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  // console.log(jokes);

  // let getUser =  () => {
  //   fetch("/api/joke")
  //   .then( res=>res.json())
  //   .then(json=>setJokes(json));
  // }
  
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
  );
}

export default App;
