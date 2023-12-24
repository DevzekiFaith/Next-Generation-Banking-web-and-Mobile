import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import BodySec1 from "./Component/BodySection1Listing/BodySec1";
import BodySec2 from "./Component/BodySection2Listing/BodySec2";
import HeroPage from "./Component/HeroPage/HeroPage";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <BodySec1 />
      <BodySec2 />
      <HeroPage />
      <Footer />
    </div>
  );
};

export default App;
