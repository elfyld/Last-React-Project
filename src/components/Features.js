import React from "react";
import "./css/features.css";
import featuresTruck from "/home/elifyld/react-proj_3/src/components/images/Group 7.png";
import hand from "/home/elifyld/react-proj_3/src/components/images/Group 21.png";
import locationImg from "/home/elifyld/react-proj_3/src/components/images/Group Copy.png";
import arrows from "/home/elifyld/react-proj_3/src/components/images/Group.png";
import gearImg from "/home/elifyld/react-proj_3/src/components/images/optimization.png";

const Features = () => {
  return (
    <div id="Features" style={{ backgroundColor: "white" }}>
      <div className="container justify-content-center">
        <div className="box">
          <h2 className="header_txt">Features</h2>
          <p className="header_txt">
            There are lots of reasons to have QLogisticks!
          </p>
        </div>
        <div className="even-columns">
          <div className="Img_container">
            <img id="feat" className="images" src={locationImg} />
            <p className="text">
              Optimization of the Vehicle Rouiting domain{" "}
            </p>
          </div>
          <div className="Img_container">
            <img   id="feat" className="images" src={gearImg} />
            <p className="text">Up to 30.000 tasks within minutes </p>
          </div>
          <div className="Img_container">
            <img   id="feat" className="images" src={locationImg} />
            <p className="text">Live Driver Tracking </p>
          </div>
        </div>
        <div className="even-columns">
          <div className="Img_container">
            <img   id="feat" className="images" src={featuresTruck} />
            <p className="text">
              Handling Capacities, time windiows,priorties{" "}
            </p>
          </div>
          <div className="Img_container">
            <img   id="feat"className="images" src={hand} />
            <p className="text">
              Pickup and Delivery Problems (e.gride sharing){" "}
            </p>
          </div>
          <div className="Img_container">
            <img  id="feat" className="images" src={arrows} />
            <p className="text">Instant Adress Changes </p>
          </div>
        </div>
        <div className="spacing">
        </div>
      </div>
    </div>
  );
};

export default Features;
