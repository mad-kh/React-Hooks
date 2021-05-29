import React from "react";
import { Card } from "react-bootstrap";
import "../MovieCard/MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{
        width: "18rem",
        height: "40rem",
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
        <Link to={`/Description/${movie.id}`}>Movie's Trailer</Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
