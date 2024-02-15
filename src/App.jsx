import "./App.css";
import MobileLayout from "./views/MobileLayout";
import WebLayout from "./views/WebLayout";
import { useState } from "react";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };
  window.addEventListener("resize", checkScreenSize);
  return <div>{screenSize > 500 ? <WebLayout /> : <MobileLayout />}</div>;
}

export default App;
