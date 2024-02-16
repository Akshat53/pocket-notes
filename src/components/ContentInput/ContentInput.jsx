import React from "react";
import Styles from "./contentInput.module.css";
import { IoMdSend } from "react-icons/io";

const ContentInput = (props) => {
  const {onChange,onSubmit,value,disable} = props
  return (
    <div className={Styles.contentInput}>
      <textarea onChange={onChange} value={value}/>
      <button onClick={onSubmit} disabled={disable}><IoMdSend /></button>
    </div>
  );
};

export default ContentInput;
