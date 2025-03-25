import React, { useRef, useState } from "react";
import st from './profileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileData from "./profileData/profileData";
import ProfileForm from "./profileForm/profileForm";
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({ profileData, profileStatus, profilePhoto, isOwner, savePhoto }) => {
    const fileInputRef = useRef(null);
    const formRef = useRef(null);
    const [editMode, setEditMode] = useState(false);

    if (!profileData) {
        return <Preloader />;
    }

    const onPhotoChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const handlePhotoClick = () => {
        if (isOwner) {
            fileInputRef.current.click();
        }
    };

    const onDataChange = () => {
        if (editMode) {
            formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        } else {
            setEditMode(true);
        }
    };

    const onSubmitSuccess = () => {
        setEditMode(false);
    };
    return (
        <div className={st.main}>
            <div className={st.description}>
                <div className={st.imageHolder} onClick={handlePhotoClick}>
                    <img className={st.image}
                         src={(profilePhoto && profilePhoto.large) || "https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"}
                         alt="Profile"
                    />
                    {isOwner && (
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={onPhotoChange}
                            style={{ display: "none" }}
                        />
                    )}
                </div>
                <div className={st.rightSide}>
                    <div className={st.spanHolder}>
                        <span><ProfileStatus isOwner={isOwner} profileData={profileData} profileStatus={profileStatus} /></span>
                    </div>
                    <div className={st.aboutMe}>
                        {editMode ? (
                            <ProfileForm profileData={profileData} formRef={formRef} onSubmitSuccess={onSubmitSuccess} />
                        ) : (
                            <ProfileData isOwner={isOwner} profileStatus={profileStatus} profileData={profileData} />
                        )}
                        {isOwner && (
                            <button onClick={onDataChange} className={st.editBtn}>
                                {editMode ? "Save info" : "Edit info"}
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
