import React from "react";
import ItemAvatar from "../ItemAvatar/ItemAvatar";
import Styles from "./listItem.module.css";
import { ParseInitials } from "../../utils/ParseInitials";

const ListItem = (props) => {
  const { item, onClick } = props;
  const { title, colour } = item;

  return (
    <li onClick={onClick} className={Styles.items}>
      <ItemAvatar colour={colour} initials={ParseInitials(title)} />
      <p>{title}</p>
    </li>
  );
};

export default ListItem;
