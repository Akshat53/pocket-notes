// MobileLayout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mobileLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import "./mobileLayout.css"

const MobileLayout = () => {
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const selectedItem = (newItem) => {
    setItem(newItem);

    navigate("/notes", { state: { selectedItem: newItem } });
  };
  // console.log(selectedItem)

  return (
    <div className="mobile-container">
      <SideBar selectedItem={selectedItem} />
    </div>
  );
};

export default MobileLayout;
