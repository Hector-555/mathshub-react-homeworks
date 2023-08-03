/* eslint-disable react/prop-types */
import React from "react";
import "./ProfilePicture.css";

function ProfilePicture({ photo }) {
  return <img src={photo} alt="avatar" />;
}

export default ProfilePicture;
