import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function App() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="app">
        <h1>Hamayoon</h1>
        <div className="navbar">
          <ul className="ulnavbar">
            <li>Home</li>
            <li>about</li>
            <li>contect</li>
            <li>skills</li>
          </ul>
        </div>
        <div className="hambargar" onClick={handelClick}>
          {click ? (
            <CloseIcon style={{ color: "white" }} />
          ) : (
            <MenuIcon style={{ color: "white" }} />
          )}
        </div>
      </div>
      <div className={click ? "mobnavbar" : "mobnavbar active"}>
        <ul className="mobul">
          <li>Home</li>
          <li>about</li>
          <li>contect</li>
          <li>skills</li>
        </ul>
      </div>
    </>
  );
}

export default App;
