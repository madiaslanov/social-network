import st from "../profileInfo.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const ProfileData = ({profileData}) => {
    if (!profileData) return null;
    const contactKeys = profileData.contacts ? Object.keys(profileData.contacts) : [];
    const eighthContactKey = contactKeys.length > 6 ? contactKeys[6] : contactKeys[0];
    return (
        <div className={st.status}>
            <div>
                <b> Full Name: {profileData.fullName}</b>
            </div>
            <div>
                <b> Looking for a job: {profileData.lookingForAJob ? "Yes" : "No"}
                </b>
            </div>
            <div>
                <b> About Me: {profileData.aboutMe}</b>
            </div>
            <div>
                <b> My Professional Skills: {profileData.lookingForAJobDescription}</b>
            </div>
            {eighthContactKey && profileData.contacts[eighthContactKey] && (
                <div>
                    <b>Contacts:</b>
                    <NavLink className={st.link} to={profileData.contacts.github}><Contacts
                        key={eighthContactKey}
                        contactTitle={eighthContactKey}
                        contactValue={profileData.contacts[eighthContactKey]}
                    />
                    </NavLink>
                </div>
            )}
        </div>
    );
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={st.contact}>
            <b>{contactTitle}:</b> <b>{contactValue}</b>
        </div>
    );
};

export default ProfileData;
