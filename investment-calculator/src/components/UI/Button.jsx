/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`card ${props.className}`}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
