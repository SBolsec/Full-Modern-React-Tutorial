import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
