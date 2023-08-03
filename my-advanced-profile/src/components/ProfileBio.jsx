/* eslint-disable react/prop-types */
import React from "react";
import "./ProfileBio.css";

function ProfileBio({ bio }) {
  return <p className="short-decription">{bio}</p>;
}

export default ProfileBio;
