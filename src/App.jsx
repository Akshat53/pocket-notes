import "./App.css";

import MobileContent from "./components/MobileContent/MobileContent";
import MobileLayout from "./views/MobileLayout";
import WebLayout from "./views/WebLayout";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };
  window.addEventListener("resize", checkScreenSize);
  return <div>{screenSize > 600 ? <WebLayout /> : ( 
    <Routes> 
      <Route path="/" element={<MobileLayout />} />
      <Route path="/notes" element={<MobileContent />} />
    </Routes>
  )}</div>;
}

export default App;
