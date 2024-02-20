import React from "react";
import ItemAvatar from "../ItemAvatar/ItemAvatar";
import Styles from "./listItem.module.css";
import { ParseInitials } from "../../utils/ParseInitials";
import { MdDeleteForever } from "react-icons/md";

const ListItem = (props) => {
  const { item, onClick ,remove} = props;
  const { title, colour } = item;

  return (
    <div className={Styles.itemMain}>
    <li onClick={onClick} className={Styles.items}>
      <ItemAvatar colour={colour} initials={ParseInitials(title)} />
      <p>{title}</p>
      
    </li>
    <MdDeleteForever onClick={remove}/>
    </div>
  );
};

export default ListItem;
