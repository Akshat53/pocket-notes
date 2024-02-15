import React from "react";
import ItemAvatar from "../ItemAvatar/ItemAvatar";
import Styles from "./listItem.module.css"

const ListItem = (props) => {
  const { item, onClick } = props;
  const { title, colour } = item;

  const parseInitials = (name) =>{
    const nameParts = name.split(" ");
    const firstName = nameParts[0] ? nameParts[0][0] : "" ;
    const secondName = nameParts[1] ? nameParts[1][0] : "" ;
    const initials = firstName + secondName ;
    return initials;
  }
  return (
    <li onClick={onClick} className={Styles.items}>
      <ItemAvatar colour={colour} initials={parseInitials(title)} />
      <p>{title}</p>
    </li>
  );
};

export default ListItem;
