import React from "react";
import Img from "../../assets/empty.png";
import Styles from "./empty.module.css";

const Empty = () => {
  return (
    <div className={Styles.empty}>
      <img src={Img} alt="empty" width={"50%"} />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
  );
};

export default Empty;
