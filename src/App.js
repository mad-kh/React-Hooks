import React from "react";
import "./App.css";
import MovieRouter from "./Components/MovieRouter/MovieRouter";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieRouter />
      </header>
    </div>
  );
}

export default App;
