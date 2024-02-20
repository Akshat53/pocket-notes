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
  const [itemArray, setItemArray] = useState(existingData || []);

  useEffect(() => {
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

    const updatedTextArray = [...selectedItem.text || [], newItem];
    const updatedSelectedItem = {
      ...selectedItem,
      text: updatedTextArray,
    };

    setItemArray((prevItemArray) =>
      prevItemArray.map((prevItem) =>
        prevItem.title === updatedSelectedItem.title && prevItem.colour === updatedSelectedItem.colour
          ? updatedSelectedItem
          : prevItem
      )
    );

    setSelectedItem(updatedSelectedItem);
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
  
    setItemArray((prevItemArray) =>
      prevItemArray.map((prevItem) =>
        prevItem.title === updatedSelectedItem.title && prevItem.colour === updatedSelectedItem.colour
          ? updatedSelectedItem
          : prevItem
      )
    );
  
    setSelectedItem(updatedSelectedItem);
  
   
    localStorage.setItem("modalData", JSON.stringify(updatedSelectedItem));
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
