import React, { useState, useEffect } from "react";
import axios from "axios";
import Cock from "./Cock";
function Home() {
  const [lap, setLap] = useState([]);
  console.log(lap);
  useEffect(() => {
    async function getApis() {
      const response = await fetch(
        "https://api.edamam.com/search?q=chicken&app_id=007adabf&app_key=712d67ca5d1c3571fdd3cdeed5f996a1"
      );
      const data = await response.json();
      const lips = data.hits;

      setLap(lips);
    }
    getApis();
  }, []);
  return (
    <div>
      <h1>{lap.id}</h1>
      <Cock lap={lap} />
    </div>
  );
}
export default Home;
