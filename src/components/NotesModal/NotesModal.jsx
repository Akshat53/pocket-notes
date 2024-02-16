
import React, { useState } from "react";
import Styles from "./notesModal.module.css";

const colourOptions = [
  {
    id: "1",
    colour: "#B38BFA",
  },
  {
    id: "2",
    colour: "#FF79F2",
  },
  {
    id: "3",
    colour: "#43E6FC",
  },
  {
    id: "4",
    colour: "#F19576",
  },
  {
    id: "5",
    colour: "#0047FF",
  },
  {
    id: "6",
    colour: "#6691FF",
  },
];

const NotesModal = (props) => {
  const { setOpenModal, addItemToList } = props;
  const [newItem, setNewItem] = useState({
    title: "",
    colour: "#BED1CF",
    
  });
  const [error, setError] = useState({
    name: null,
  });

  const handleOverlayClick = () => {
    setOpenModal(false);
  };

  const handleColorChange = (colour) => {
    setNewItem({ ...newItem, colour: colour });
  };

  const handleOnChange = (e) => {
    let val = e.target.value;
    setNewItem({
      ...newItem,
      title: val,
    });
  };

  const handleSubmit = () => {
    if (newItem.title) {
      addItemToList(newItem);
      setOpenModal(false);
    } else {
       setError((prev) =>({
        ...prev,
        name:"enter group name"
      }));
    }
  };


  return (
    <>
      <div className={Styles.overlay} onClick={handleOverlayClick}></div>
      <div className={Styles.modal}>
        <div className={Styles.modalContent}>
          <h4>Create New Group</h4>

          <label>
            <span>Group Name</span>
            <input
              type="text"
              placeholder="Enter Group Name"
              className={Styles.nameInput}
              value={newItem.title}
              onChange={handleOnChange}
            />
          </label>
          <span style={{ color: "red" }}>{error.name}</span>
          <label>
            <span>Choose Colour</span>
            <div className={Styles.colourOptionsContainer}>
              {colourOptions.map((item) => (
                <div
                  key={item.id}
                  className={Styles.colours}
                  style={{
                    backgroundColor: item.colour,
                    border:
                      newItem.colour === item.colour
                        ? "5px solid black"
                        : "5px solid white",
                  }}
                  onClick={() => handleColorChange(item.colour)}
                ></div>
              ))}
            </div>
          </label>
          <div className={Styles.buttonContainer}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesModal;
