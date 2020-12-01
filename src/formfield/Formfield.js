import React from "react";
import "bulma/css/bulma.css";
import "./Formfield.css";

const FormField = (props) => {
  return (
    <div>
      <div className="field">
        <label className="Label">{props.label}</label>
      </div>

      <div class="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
