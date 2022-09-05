import React from "react";
import Form from "./Form";
import "./css/form.css";
import logo from "/home/elifyld/react-proj_3/src/components/images/Logo.png";

const Contact = () => {
  return (
    <div id="Contact" style={{ backgroundColor: "#1c2430" }}>
      <div className="container">
        <div className="box">
          <h2 style={{ color: "#fbaf19e6", textAlign: "center" }}>Contact</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h1 className="header">So Simple, So Powerful!</h1>
            <p className="text_Home">
              Got a question? We are here to help! Fill up the form to get in
              touch with us on your enquires.{" "}
            </p>
          </div>
          <div class="col-md-6">
            <h3
              id="contact"
              style={{ color: "#fbaf19e6", textAlign: "center" }}
            >
              Contact Us
            </h3>
            <Form />
          </div>
        </div>
        <div className="spacing"></div>
        <footer class="text-lg-start">
          <div class="d-flex justify-content-between" style={{alignItems : "center"}}>
            <img className="logo_C" src={logo} />
            <div
              class="text-right p-3"
              style={{ color: "white", fontWeight: "bold" }}
            >
              © 2019 Copyright Qimia GmbH
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
