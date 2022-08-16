import React from "react";
import './css/lineImg.css'
import pathImg from "/home/elifyld/react-proj_3/src/components/images/Path.png";
import truck from "/home/elifyld/react-proj_3/src/components/images/Easy to Integrate.png";
import Logo from "/home/elifyld/react-proj_3/src/components/images/Logo.png";
import car from "/home/elifyld/react-proj_3/src/components/images/Fast and Scalable.png";
import featuresImg from "/home/elifyld/react-proj_3/src/components/images/Practical Features.png";

const images = () => {
  return (
    <div style={{ backgroundColor: "#1c2430" }}>
      <img className="pathImg" src={pathImg} />
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "#fbaf19e6" }}>Why</h2>
        <img className="logo" src={Logo} />
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
          <img className="round_Img" src={car} />
          <p className="text" style={{ color: "#fbaf19e6"}} >Fast And Scalable</p>
          </div>
          <div >
          <img className="round_Img" src={truck} />
           <p className="text" style={{ color: "#fbaf19e6"}} >Easy to Integrate</p>
          </div>
          <div>
          <img className="round_Img" src={featuresImg} />
          <p className="text" style={{ color: "#fbaf19e6"}} > Cost Efficient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default images;
