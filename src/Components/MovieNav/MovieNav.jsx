import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieNav({ getTitleSearch, getRateSearch }) {
  const ratingChanged = (newRating) => {
    getRateSearch(newRating);
  };
  const handleTitel = (e) => {
    getTitleSearch(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "black", color: "black" }}>
      <Navbar bg="black" variant="black">
        <Navbar.Brand href="#home" style={{ color: "aqua" }}>
          Movies
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ color: "aqua" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleTitel}
          />
          <ReactStars
            count={8}
            onChange={ratingChanged}
            value={0}
            size={24}
            activeColor="aqua"
          />
        </Form>
      </Navbar>
    </div>
  );
}

export default MovieNav;
