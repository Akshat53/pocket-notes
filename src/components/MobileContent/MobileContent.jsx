// MobileContent.js
import React from "react";
import { useLocation } from "react-router-dom";
import Styles from "./mobileContent.module.css";
import Content from "../Content/Content";
import ContentHeader from "../ContentHeader/ContentHeader";

const MobileContent = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {};
  //   console.log(selectedItem)

  return (
    <div>
      <ContentHeader selectedI={selectedItem} />
      <Content item={selectedItem} />
    </div>
  );
};

export default MobileContent;
