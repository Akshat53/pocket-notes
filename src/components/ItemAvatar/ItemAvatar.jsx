import React from "react";
import Styles from "./itemAvatar.module.css";

const ItemAvatar = (props) => {
  const { colour, initials } = props;
  return (
    <div className={Styles.avatar} style={{ backgroundColor: colour }}>
      {initials}
    </div>
  );
};

export default ItemAvatar;
