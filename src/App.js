import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        {data ? <p>Data from backend: {data.message}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
