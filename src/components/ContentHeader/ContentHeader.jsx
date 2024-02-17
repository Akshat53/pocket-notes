import React, { useEffect, useState } from "react";
import Styles from "./contentHeader.module.css";
import ItemAvatar from "../ItemAvatar/ItemAvatar";
import { ParseInitials } from "../../utils/ParseInitials";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ContentHeader = (props) => {
  const { selectedI } = props;
  const back = useNavigate()
  const handleClick=()=>{
    back("/")
  }

  return (
    
      <div className={Styles.header}>
     
        <IoMdArrowRoundBack onClick={handleClick}/>
     
        <ItemAvatar 
          initials={ParseInitials(selectedI?.title).toUpperCase()}
          colour={selectedI?.colour}
        />
        <p className={Styles.title}>{selectedI?.title}</p>
      </div>
    
 
  );
};

export default ContentHeader;
