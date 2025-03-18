import React from "react";
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import st from './profile.module.css';


const Profile = ({profileData, profileStatus}) => {
    return (
        <div className={st.main}>
            <ProfileInfo profileStatus={profileStatus} profileData={profileData} />
            <MyPosts />
        </div>
    );
};

export default Profile;
