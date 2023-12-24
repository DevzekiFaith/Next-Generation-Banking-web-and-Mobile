import React from "react";
import Navlogo from "../../assets/logo1.svg";
import "./Navbar.css";
import MenuBar from "../../assets/icon-hamburger.svg";
import CloseBar from "../../assets/icon-close.svg";

const Navbar = () => {
  // MenuBar.AddEventListener("click", () => {
  //   SideModal.style.display = 'block';
  // });
  return (
    <div className="cc-container BankNav">
      <img className="LogoBar" src={Navlogo} alt="" />
      <ul className="NavBar-Content">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
      </ul>
      <div>
        <button className="R-Button">Request Invite</button>
      </div>

      <div className="NavMenu">
        <img className="OpenBar" src={MenuBar} alt="" />
        <img className="CloseBar" src={CloseBar} alt="" />
      </div>

      <div className="SideModal">
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Career</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
