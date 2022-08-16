import React from "react";
import "./css/header.css";
import myImage from "/home/elifyld/react-proj_3/src/components/images/Promo Mockup.png";
import "./css/lineImg.css";
import pathImg from "/home/elifyld/react-proj_3/src/components/images/Path.png";
import truck from "/home/elifyld/react-proj_3/src/components/images/Easy to Integrate.png";
import Logo from "/home/elifyld/react-proj_3/src/components/images/Logo.png";
import car from "/home/elifyld/react-proj_3/src/components/images/Fast and Scalable.png";
import featuresImg from "/home/elifyld/react-proj_3/src/components/images/Practical Features.png";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#1c2430", backgroundImage: `url(${pathImg})` }}
    >
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
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "#fbaf19e6" }}>Why</h2>
        <img className="logo" src={Logo} />
      </div>
      <div className="container">
        <div className="even-columns">
          <div className="Img_container">
            <img className="images" src={car} />
            <p className="text" style={{ color: "#fbaf19e6" }}>
              Fast And Scalable
            </p>
          </div>
          <div className="Img_container">
            <img className="images" src={truck} />
            <p className="text" style={{ color: "#fbaf19e6" }}>
              Easy to Integrate
            </p>
          </div>
          <div className="Img_container">
            <img className="images" src={featuresImg} />
            <p className="text" style={{ color: "#fbaf19e6" }}>
              {" "}
              Cost Efficient
            </p>
          </div>
        </div>
      </div>
      <div style={{paddingBottom : 100}}></div>
    </div>
  );
};

export default Header;
