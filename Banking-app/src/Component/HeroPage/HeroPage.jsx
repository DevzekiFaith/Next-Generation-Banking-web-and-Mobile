import React from "react";
import "./HeroPage.css";
import heroimage1 from "../../assets/image-currency.jpg";
import heroimage2 from "../../assets/image-restaurant.jpg";
import heroimage3 from "../../assets/image-plane.jpg";
import heroimage4 from "../../assets/image-confetti.jpg";

const HeroPage = () => {
  return (
    <div className="HeroPage1">
      <div>
        <h1 className="HHFirst">Latest Article</h1>
      </div>
      <div className="HeroGrid">
        <div className="HeroOne">
          <img className="HOne" src={heroimage1} alt="" />
          <h6>By Claire Robinson</h6>
          <p className="P1">
            <span>Receive money in any currency with no fees</span> The world is getting
            smaller and we’re becoming more mobile. So why should you be forced
            to only receive money in a single …
          </p>
        </div>
        <div className="HeroTwo">
          <img className="HTwo" src={heroimage2} alt="" />
          <h6>By Wilson Hutton</h6>
          <p className="HeTwo">
           <span> Treat yourself without worrying about money</span> Our simple budgeting
            feature allows you to separate out your spending and set realistic
            limits each month. That means you …
          </p>
        </div>
        <div className="HeroThree">
          <img className="HThree" src={heroimage3} alt="" />
          <h6>By Wilson Hutton</h6>
          <p className="HeThree">
            <span>Take your Easybank card wherever you go</span> We want you to enjoy your
            travels. This is why we don’t charge any fees on purchases while
            you’re abroad. We’ll even show you …
          </p>
        </div>
        <div className="HeroFour">
          <img className="HFour" src={heroimage4} alt="" />
          <h6>By Claire Robinson</h6>
          <p className="HeFour">
           <span> Our invite-only Beta accounts are now live!</span> After a lot of hard work
            by the whole team, we’re excited to launch our closed beta. It’s
            easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
