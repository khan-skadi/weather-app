import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Navbar />
    </div>
  );
}

export default App;
