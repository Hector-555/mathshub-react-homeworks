import React from "react";
import ProfilePicture from './ProfilePicture';
import ProfileName from './ProfileName';
import ProfileBio from './ProfileBio';
import ProfileHobbies from './ProfileHobbies';
import ProfileCitation from './ProfileCitation';

function Profile() {
  return (
    <div class="main-container">
      <h1>Личный профиль</h1>
      <ProfilePicture />
      <ProfileName />
      <ProfileBio />
      <ProfileHobbies />
      <ProfileCitation />
    </div>
  );
}

export default Profile;
