import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {
    const [msg, setMsg] = useState("");

      useEffect(() => {
        const getWelcomeText = async () => {
          try {
            const response = await axios.get("http://localhost:5500");
            setMsg(response.data.message);
          } catch (error) {
            console.log("Error fetching data:", error); 
          }
        };
    
        getWelcomeText();
      }, []);
    
      return (
        <div className="App">
          <h1>{msg}</h1>
        </div>
      );
    }
    

export default Home