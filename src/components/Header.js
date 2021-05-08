import { useState } from "react";
import logo from "../img/logo-green-256.png";
import HamButton from "./HamButton";
import NavBar from "./NavBar";

const Header = ({ color }) => {
  const [hamToggle, setHamToggle] = useState(false);
  const navBar = document.getElementsByClassName("nav-bar-container");
  const toggleNav = () => {
    if (!hamToggle && document.body.clientWidth < 1025) {
      navBar[0].style.marginLeft = "0";
      setHamToggle(true);
    } else if (hamToggle && document.body.clientWidth < 1025) {
      navBar[0].style.marginLeft = "100%";
      setHamToggle(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header" style={{ backgroundColor: color }}>
        <img className="header-logo" alt="logo" src={logo} />
        <div onClick={() => toggleNav()}>
          <HamButton hamColor={"#48ff00"} toggleButton={hamToggle} />
        </div>
      </div>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
