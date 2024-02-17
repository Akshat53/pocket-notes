import React, { useEffect, useState } from "react";
import Styles from "./content.module.css";
import ContentInput from "../ContentInput/ContentInput";
import Empty from "../Empty/Empty";


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
    localStorage.setItem("modalData", JSON.stringify(updatedItemArray));
    setInputValue("");
  };

  // console.log(itemArray);

  return (
    <>
      <div className={Styles.content}>
        <ul>
          {selectedItem &&
            selectedItem.text ?
            selectedItem.text
              .slice()
              .reverse()
              .map((textItem, index) => (
                <div  className={Styles.ItemBox} key={index}>
                  <li >{textItem.text}</li>
                  <p className={Styles.dateTime}> {textItem.dateTime}</p>
                </div>
              )):<Empty/>}
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
