import React, { useEffect, useState } from "react";
import Styles from "./sidebar.module.css";
import ItemList from "../ListItem/ListItem";
import NotesModal from "../NotesModal/NotesModal";
import { FaPlus } from "react-icons/fa";

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

  const handleSelect = (items) => {
    if (items) {
      selectedItem(items);
    }
  };
  // console.log(items)

  return (
    <div className={Styles.sidebar}>
      <h2>Pocket Notes</h2>

      <ul>
        {items.map((item, index) => {
          return (
            <ItemList
              key={index}
              item={item}
              onClick={() => handleSelect(item)}
            />
          );
        })}
      </ul>
      <button onClick={addGroup} className={Styles.addGroup}>
        <FaPlus />
      </button>

      {openModal && (
        <NotesModal setOpenModal={setOpenModal} addItemToList={addItemToList} />
      )}
    </div>
  );
};

export default SideBar;
