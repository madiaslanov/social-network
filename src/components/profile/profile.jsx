import React from "react";
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import style from "./profile.module.css"

const Profile = ({profileData, profileStatus, profilePhoto, isOwner, savePhoto}) => {
    return (
        <div className={style.main}>
            <ProfileInfo isOwner={isOwner} profileStatus={profileStatus} profilePhoto={profilePhoto}
                         profileData={profileData} savePhoto={savePhoto}/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
