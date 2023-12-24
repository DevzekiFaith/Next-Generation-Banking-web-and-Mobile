import React from "react";
import "./Footer.css";
// import './Footer.scss'
import FooterLogo from "../../assets/logo.svg";
import Icon1 from "../../assets/icon-facebook.svg";
import Icon2 from "../../assets/icon-youtube.svg";
import Icon3 from "../../assets/icon-twitter.svg";
import Icon4 from "../../assets/icon-pinterest.svg";
import Icon5 from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="cc-container FooterOne">
      <div>
        <img className="FLogo" src={FooterLogo} alt="" />
        <div className="IconGroup">
          <img className="IOne" src={Icon1} alt="" />
          <img className="ITwo" src={Icon2} alt="" />
          <img className="IThree" src={Icon3} alt="" />
          <img className="IFour" src={Icon4} alt="" />
          <img className="IFive" src={Icon5} alt="" />
        </div>
      </div>
      <div className="FooterWriteup">
        <div className="AboutUs">
          <h3>About Us</h3>
          <p>contact</p>
          <p> Blog</p>
        </div>

        <div className="Career">
          <h3>Careers</h3>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
        <div className="FooterReach">
          <button className="RequestButn">Request Invite</button>
          <span className="FooterRight">© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
