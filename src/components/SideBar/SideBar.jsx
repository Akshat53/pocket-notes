// SideBar.js
import React, { useState } from "react";
import Styles from "./sidebar.module.css";
import ItemList from "../ListItem/ListItem";
import NotesModal from "../NotesModal/NotesModal";



const SideBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);

  const addGroup = () => {
    setOpenModal(true);
  };
  console.log(items)
  const addItemToList = (newI) => {
    setItems([...items, newI]);
  };


  return (
    <div className={Styles.sidebar}>
      <h2>Pocket Notes</h2>
      <ul>
        {items.map((item, index) => {
          return <ItemList key={index} item={item} />;
        })}
      </ul>
      <button onClick={addGroup} className={Styles.addGroup}>
        +
      </button>

      {openModal && (
        <NotesModal setOpenModal={setOpenModal} addItemToList={addItemToList} />
      )}
    </div>
  );
};

export default SideBar;
