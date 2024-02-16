import React, { useEffect, useState } from "react";
import Styles from "./contentHeader.module.css";
import ItemAvatar from "../ItemAvatar/ItemAvatar";
import { ParseInitials } from "../../utils/ParseInitials";

const ContentHeader = (props) => {
  const { selectedI } = props;

  return (
    <div  className={Styles.header}>
      <ItemAvatar
        initials={ParseInitials(selectedI?.title).toUpperCase()}
        colour={selectedI?.colour}
      />
      <p>{selectedI?.title}</p>
    </div>
  );
};

export default ContentHeader;
