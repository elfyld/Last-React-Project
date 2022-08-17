import React from "react";
import "./css/product.css";
import devices from "/home/elifyld/react-proj_3/src/components/images/Group 2.png";
const Product = () => {
  return (
    <div style={{ backgroundColor: "#121821" }}>
      <div class="container">
        <div className="box">
          <h2 style={{ color: "#fbaf19e6" }} className="header_txt">
            Product
          </h2>
          <p style={{ color: "white" }} className="header_txt">
            Easy to use dashboard supporting every step of delivery process.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <img className="devices" src={devices} fluid />
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <div class="d-flex">
                  <span className="list_txt">
                    {" "}
                    Operator, Driver and Customer Interfaces{" "}
                  </span>
                </div>
              </li>
              <li>
                <div class="d-flex">
                  <span className="list_txt">
                    {" "}
                    Realtime tracking of the delivery cars
                  </span>
                </div>
              </li>
              <li>
                <div class="d-flex ">
                  <span className="list_txt">
                    {" "}
                    Developed for IOS and Android{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ paddingBottom: 70 }}></div>
      </div>
    </div>
  );
};

export default Product;
