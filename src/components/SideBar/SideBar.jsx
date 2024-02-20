import React, { useEffect, useState } from "react";
import Styles from "./sidebar.module.css";
import ItemList from "../ListItem/ListItem";
import NotesModal from "../NotesModal/NotesModal";
import { FaPlus } from "react-icons/fa";
import Blank from "../../assets/black.png";

const SideBar = (props) => {
  const { selectedItem } = props;
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("modalData");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const addGroup = () => {
    setOpenModal(true);
  };

  const addItemToList = (newItem) => {
    setItems([...items, newItem]);
    localStorage.setItem("modalData", JSON.stringify([...items, newItem]));
  };

  const handleSelect = (item) => {
    selectedItem(item);
  };
  const handleRemove = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    // updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("modalData", JSON.stringify(updatedItems));
  };
  // console.log(items)

  return (
    <div className={Styles.sidebar}>
      <h2>Pocket Notes</h2>

      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ItemList
              key={index}
              item={item}
              onClick={() => handleSelect(item)}
              remove={() => handleRemove(index)}
            />
          ))
        ) : (
          <div className={Styles.emptyItem}>
            <h1>
              Hello,
              <br />
              Your pocket is feeling light! No notes available yet. Start
              jotting down your thoughts and ideas to fill it up.
            </h1>
            <img src={Blank} width={"100%"} />
            <button onClick={addGroup}>
              Create Note <FaPlus />
            </button>
          </div>
        )}
      </ul>
      {items.length > 0 ? (
        <button onClick={addGroup} className={Styles.addGroup}>
          <FaPlus />
        </button>
      ) : null}

      {openModal && (
        <NotesModal setOpenModal={setOpenModal} addItemToList={addItemToList} />
      )}
    </div>
  );
};

export default SideBar;
