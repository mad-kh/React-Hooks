import React, { useState } from "react";
import moviesData from "../moviesData/moviesData";
import MovieList from "../MovieList/MoviesList";
import AddMovie from "../AddMovie/AddMovie";
import MovieNav from "../MovieNav/MovieNav";

function MovieContainer() {
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
    <div>
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

export default MovieContainer;
