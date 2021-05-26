import React from "react";
import { Card } from "react-bootstrap";
import "../MovieCard/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{
        width: "18rem",
        height: "35rem",
        color: "white",
        backgroundColor: "black",
      }}
      key={movie.i}
      className="image-container d-flex justify-content-start m-3"
    >
      <Card.Img variant="top" src={movie.posterUrl} height="40%" />
      <Card.Body>
        <Card.Title>
          {movie.title} <br />
        </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <h3>{"⭐".repeat(movie.rate)}</h3>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
