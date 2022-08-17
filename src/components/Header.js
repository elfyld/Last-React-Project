import React from "react";
import "./css/header.css";
import myImage from "/home/elifyld/react-proj_3/src/components/images/Promo Mockup.png";
import "./css/lineImg.css";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#1c2430" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="header">Powerfull Logistics Platform!</h1>
            <p className="text_Home">
              QLogisticks is the next generation logistics platfrom.{" "}
            </p>
          </div>
          <div className="col-md-8 ">
            <img className="image" src={myImage} alt="Computer" fluid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
