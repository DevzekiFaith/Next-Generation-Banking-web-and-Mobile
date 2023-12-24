import React from "react";
import "./BodySec1.css";
import Logoset from "../../assets/image-mockups.png";
import BgBody from "../../assets/bg-intro-desktop.svg";

const BodySec1 = () => {
  return (
    <div className="cc-container BodySec1">
      <div className="CombinedWords">
        <h1 className="MainH1">Next generation digital banking</h1>
        <p className="MainP1">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <div>
        <button className="RequestBtn">Request Invite</button>
      </div>
      </div>
      <div className="CornerImage">
        <img className="CImage" src={BgBody} alt="" />
      </div>

      <div>
        <img className="PhoneLogo" src={Logoset} alt="" />
      </div>
      
    </div>
  );
};

export default BodySec1;
