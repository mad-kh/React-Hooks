import "./App.css";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList/MoviesList";
import moviesData from "./Components/moviesData/moviesData";
import MovieNav from "./Components/MovieNav/MovieNav";
import AddMovie from "./Components/AddMovie/AddMovie";
function App() {
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const [moviesListData, setMoviesListData] = useState(moviesData);

  const getTitleSearch = (input) => {
    setTitleSearch(input);
  };
  const getRateSearch = (input) => {
    setRateSearch(input);
  };
  const getMoviesListData = (input) => {
    setMoviesListData([...moviesListData, input]);
  };
  return (
    <div className="App">
      <MovieNav getTitleSearch={getTitleSearch} getRateSearch={getRateSearch} />
      <MovieList
        moviesListData={moviesListData}
        titleSearch={titleSearch}
        rateSearch={rateSearch}
      />
      <AddMovie getMoviesListData={getMoviesListData} />
    </div>
  );
}

export default App;
