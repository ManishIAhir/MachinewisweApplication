import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/get-dummydata");
      if (!response.ok) { 
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const lessData = data.slice(0,6000)
      setData(lessData);
      console.log("This is the data:", data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <div className="App">Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Cycle Status</h1>
      <div  className="wrapper" style={{ display: "flex", marginInline: "12px" }}>
      {data.length > 0 ? data.map((item, index) => (
        
          <div
            className="column"
            style={{
              width: "0.5px", // Example fixed width, adjust as necessary
              height: "25px",
              backgroundColor: item.machine_status === 1
                ? "green"
                : item.machine_status === 0
                ? "yellow"
                : item.machine_status === null
                ? "red" : "white",
                borderBottomColor: "black", borderBottomWidth: "3px", borderBottomStyle: "solid"
            }}
            key={index}
          ></div>
       
      )) : <p>Loading .......</p>}
       </div>
     
    </div>
  );
}

export default App;
