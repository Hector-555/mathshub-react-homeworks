/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "./ChangeTheme.css";

function ChangeTheme() {
  const handleLightTheme = () => {
    document.body.classList.add("lightTheme");
    document.body.classList.remove("darkTheme");
  };

  const handleDarkTheme = () => {
    document.body.classList.add("darkTheme");
    document.body.classList.remove("lightTheme");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-light"
        onClick={handleLightTheme}
      />
      <button
        type="button"
        className="btn btn-dark"
        onClick={handleDarkTheme}
      />
    </>
  );
}

export default ChangeTheme;
