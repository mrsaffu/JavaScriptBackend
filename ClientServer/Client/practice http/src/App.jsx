import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
import Home from "./assets/Components/Home";
import AllUsers from "./assets/Components/AllUsers";
import NavBar from "./layout/NavBar/NavBar";
import AddUsers from "./assets/Components/AddUsers";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route path="getallUsers" element={<AllUsers/>}/>
     <Route path="addusedetails" element={<AddUsers/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
