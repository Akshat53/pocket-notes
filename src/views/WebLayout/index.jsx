import React, { useState } from "react";
import "./webLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Empty from "../../components/Empty/Empty";

const WebLayout = () => {
  const [item, setItem] = useState(null);
  const selectedItem = (newItem) => {
    setItem(newItem);
  };


  return (
    <div className="container">
      <div className="left-side">
        
        <SideBar selectedItem={selectedItem} />
      </div>
      <div className="right-side">
        {item ? (
          <>
            <ContentHeader selectedI={item}  />
            <Content item={item} />
          </>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default WebLayout;
