import React from "react";
import "./css/form.css";

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form className="add-form">
      <div className="form_box">
        <div>
          <input
            id="placeholder"
            className="inputs"
            type="text"
            placeholder="Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="placeholder"
            className="inputs"
            type="text"
            placeholder="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputs"
            id="description"
            type="text_1"
            placeholder="Describe your project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="d-flex justify-content-center">
          <button className="button" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
