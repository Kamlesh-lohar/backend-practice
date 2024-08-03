// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function App() {
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     const getWelcomeText = async () => {
//       try {
//         const response = await axios.get("http://localhost:5500");
//         setMsg(response.data.message);
//       } catch (error) {
//         console.log("Error fetching data:", error); 
//       }
//     };

//     getWelcomeText();
//   }, []);

//   return (
//     <div className="App">
//       <h1>{msg}</h1>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Switch> */}
      {/* <Switch> */}
        <Route path="/register" element={<Register/>} />
        <Route exact path="/" element={<Home/>} />
        {/* Add other routes here */}
      {/* </Switch> */}</Routes>
    </Router>
  );
};

export default App;
