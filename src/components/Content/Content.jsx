import React, { useEffect, useState } from "react";
import Styles from "./content.module.css";
import ContentInput from "../ContentInput/ContentInput";
import Empty from "../Empty/Empty";
import { MdDeleteSweep } from "react-icons/md";

const Content = (props) => {
  const { item } = props;
  const existingData = JSON.parse(localStorage.getItem("modalData"));
  const [selectedItem, setSelectedItem] = useState();
  const [inputValue, setInputValue] = useState("");
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    if (existingData) setItemArray(existingData);
    setSelectedItem(item);
  }, [item]);

  useEffect(() => {
    localStorage.setItem("modalData", JSON.stringify(itemArray));
  }, [itemArray]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const formattedDate = `Date : ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const newItem = {
      dateTime: formattedDate,
      text: inputValue,
    };

    const newTextArray = [...(selectedItem.text || []), newItem];

    selectedItem.text = newTextArray;

    const updatedItemArray = itemArray.map((item) => {
      if (
        item.title === selectedItem.title &&
        item.colour === selectedItem.colour
      ) {
        return selectedItem;
      }
      return item;
    });
    setItemArray(updatedItemArray);
    setInputValue("");
  };

  const handleRemove = (itemToRemove) => {
    const updatedText = selectedItem.text.filter(
      (textItem) => textItem.dateTime !== itemToRemove.dateTime
    );

    const updatedSelectedItem = {
      ...selectedItem,
      text: updatedText,
    };

    const updatedItemArray = itemArray.map((item) =>
      item.title === updatedSelectedItem.title &&
      item.colour === updatedSelectedItem.colour
        ? updatedSelectedItem
        : item
    );

    setItemArray(updatedItemArray);
    setSelectedItem(updatedSelectedItem); // Update selectedItem state
  };

  return (
    <>
      <div className={Styles.content}>
        <ul>
          {selectedItem && selectedItem.text ? (
            selectedItem.text
              .slice()
              .reverse()
              .map((textItem, index) => (
                <div className={Styles.ItemBox} key={index}>
                  <p className={Styles.delete}>
                    <MdDeleteSweep onClick={() => handleRemove(textItem)} />
                  </p>
                  <li>{textItem.text}</li>
                  <p className={Styles.dateTime}>{textItem.dateTime}</p>
                </div>
              ))
          ) : (
            <Empty />
          )}
        </ul>
      </div>
      <div className={Styles.footer}>
        <ContentInput
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={inputValue}
          disable={!inputValue ? true : false}
        />
      </div>
    </>
  );
};

export default Content;
