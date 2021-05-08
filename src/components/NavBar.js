import { Link } from "react-router-dom";

import { VscHome } from "react-icons/vsc";
import { RiSettings5Line } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
  const navIcon = document.getElementsByClassName("nav-icon");
  const navLinkContainer = document.getElementsByClassName(
    "nav-link-container"
  );
  const styleNavIcons = (icon) => {
    if (window.innerWidth < 1025) {
      for (let i = 0; i < navIcon.length; i++) {
        navIcon[i].style.opacity = "0.3";
      }
      navIcon[icon].style.opacity = "1";
    } else {
      for (let i = 0; i < navLinkContainer.length; i++) {
        navLinkContainer[i].children[0].style.display = "block";
        navLinkContainer[i].children[1].style.display = "none";
      }
      navLinkContainer[icon].children[0].style.display = "none";
      navLinkContainer[icon].children[1].style.display = "block";
    }
  };

  return (
    <>
      <Link to="/Portfolio-Code">
        <div className="nav-link-container" onClick={() => styleNavIcons(0)}>
          <VscHome className="nav-icon" />
          <p>Home</p>
        </div>
      </Link>

      <Link to="/about">
        <div className="nav-link-container" onClick={() => styleNavIcons(1)}>
          <AiOutlineUser className="nav-icon" />
          <p>About</p>
        </div>
      </Link>

      <Link to="/skills">
        <div className="nav-link-container" onClick={() => styleNavIcons(2)}>
          <RiSettings5Line className="nav-icon" />
          <p>Skills</p>
        </div>
      </Link>

      <Link to="/mywork">
        <div className="nav-link-container" onClick={() => styleNavIcons(3)}>
          <BsEye className="nav-icon" />
          <p>My Work</p>
        </div>
      </Link>
      <Link to="/contact">
        <div className="nav-link-container" onClick={() => styleNavIcons(4)}>
          <GoMail className="nav-icon" />
          <p>Contact</p>
        </div>
      </Link>
    </>
  );
};

export default NavBar;
