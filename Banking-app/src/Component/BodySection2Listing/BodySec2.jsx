import React from "react";
import "./bodySec2.css";
import Icon1 from "../../assets/icon-online.svg";
import Icon2 from "../../assets/icon-budgeting.svg"
import Icon3 from "../../assets/icon-onboarding.svg"
import Icon4 from "../../assets/icon-api.svg"

const BodySec2 = () => {
  return (
    <div className="cc-container Sec2">
      <div className="EasyBank">
        <h1 className="EBank">Why choose Easybank?</h1>
        <p className="PTag">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="ListingOne">
        <div>
          <img className="OnlineIcon" src={Icon1} alt="" />
          <h3> Online Banking</h3>
          <p className="PSecond">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img className="OnlineIcon" src={Icon2} alt="" />
          <h3> Simple Budgeting</h3>
          <p className="PSecond">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div>
          <img className="OnlineIcon" src={Icon3} alt="" />
          <h3> Fast Onboarding</h3>
          <p className="PSecond">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <img className="OnlineIcon" src={Icon4} alt="" />
          <h3> Open API</h3>
          <p className="PSecond">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySec2;
