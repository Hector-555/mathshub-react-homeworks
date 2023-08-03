/* eslint-disable react/prop-types */
import React from "react";
import "./ProfileCitation.css";

function ProfileCitation({ cite }) {
  return <q className="cite">{cite}</q>;
}

export default ProfileCitation;
