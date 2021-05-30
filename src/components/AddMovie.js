import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddMovie = ({ addNewMovie, setRatingSearch }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Rate, setRate] = useState("");
  const [cover, setCover] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      Title,
      Year,
      Rate,
      cover,
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setTitle("");
    setYear("");
    setRate("");
    setCover("");
  };

  const stars = (Rate) => {
    let startsTab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Rate) {
        startsTab.push(
          <span
            style={{ color: "#FFC83D", fontSize: "40px", cursor: "pointer" }}
            onClick={() => setRate(i)}
          >
            ★
          </span>
        );
      } else {
        startsTab.push(
          <span
            style={{ color: "#FFC83D", fontSize: "40px", cursor: "pointer" }}
            onClick={() => setRate(i)}
          >
            ☆
          </span>
        );
      }
    }
    return startsTab;
  };
  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        Add new movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            value={Title}
            required
            onChange={(e) => setTitle(e.target.value)}
          /><br/>
          <label>Movie Rate</label>
        <div> {stars (Rate)}</div>
             <br/>
          <label>Movie Release Date</label>
          <input
            type="number"
            name="Year"
            value={Year}
            required
            onChange={(e) => setYear(e.target.value)}
          /><br/>
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            value={cover}
            required
            onChange={(e) => setCover(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
