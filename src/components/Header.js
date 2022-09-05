import React from "react";
import "./css/header.css";
import myImage from "/home/elifyld/react-proj_3/src/components/images/Promo Mockup.png";
import "./css/lineImg.css";

const Header = () => {
  return (
    <div id="Home" style={{ backgroundColor: "#1c2430" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 style={{ fontWeight: "bolder" }} className="header">
              Powerful Logistics Platform!
            </h1>
            <p className="text_Home">
              QLogisticks is the next generation logistics platfrom.{" "}
            </p>
          </div>
          <div className="col-md-8 ">
            <div className="video-container">
              <iframe
                className="video"
                controls
                autoplay
                fluid
                src="https://www.youtube.com/embed/9mdQPy26hGM"
              ></iframe>
              <img className="image" src={myImage} alt="Computer" fluid />
            </div>
            <div id="header"className="spacing"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
