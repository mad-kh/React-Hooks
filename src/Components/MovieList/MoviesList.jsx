import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ moviesListData, titleSearch, rateSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "1%",
        alignItems: "space-between",
      }}
    >
      {moviesListData
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
            movie.rate >= rateSearch
        )

        .map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
