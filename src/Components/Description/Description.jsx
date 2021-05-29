import moviesData from "../moviesData/moviesData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Description = ({ match }) => {
  const [movie] = moviesData.filter((el) => el.id === match.params.id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua",
        margin: "10%",
      }}
    >
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <Link to="/">
          <Button variant="info">Home</Button>
        </Link>
      </div>

      <div>
        <h3>{movie.title}'s Trailer </h3>
        <iframe
          width="600"
          height="300"
          src={movie.trailer}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Description;
