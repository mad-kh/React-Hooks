import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import "./AddMovie.css";
const AddMovie = ({ getMoviesListData }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: 0,
  });

  const handlemovie = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    getMoviesListData(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterUrl: "",
      rate: 0,
    });

    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginLeft: "3%" }} className="Add-btn-container">
      <Button className="Add-btn" variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal
        className="add-modal"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            name="title"
            placeholder="Title..."
            className="mr-sm-2"
            onChange={handlemovie}
          />
          <FormControl
            type="text"
            name="description"
            as="textarea"
            placeholder="Description...."
            className="mr-sm-2"
            onChange={handlemovie}
          />
          <FormControl
            type="text"
            name="posterUrl"
            placeholder="poster URL..."
            className="mr-sm-2"
            onChange={handlemovie}
          />
          <FormControl
            type="text"
            name="rate"
            max="8"
            min="1"
            as="select"
            placeholder="Rating"
            className="mr-sm-2"
            onChange={handlemovie}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Modal-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="Modal-btn"
            variant="secondary"
            onClick={handleSubmit}
          >
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
