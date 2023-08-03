/* eslint-disable react/prop-types */
import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileBio from "./ProfileBio";
import ProfileHobbies from "./ProfileHobbies";
import ProfileCitation from "./ProfileCitation";
import ProfileTitle from "./ProfileTitle";
import "./Profile.css";

function Profile({ userData }) {
  return (
    <div className="main-container">
      <ProfileTitle title={userData.title} />
      <ProfilePicture photo={userData.photo} />
      <ProfileName name={userData.name} />
      <ProfileBio bio={userData.bio} />
      <ProfileHobbies hobby={userData.hobby} />
      <ProfileCitation cite={userData.cite} />
    </div>
  );
}

export default Profile;
