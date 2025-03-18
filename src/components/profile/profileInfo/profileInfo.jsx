import React from "react";
import st from './profileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({profileData,profileStatus}) => {

    if (!profileData) {
        return <Preloader/>
    }

    return <div className={st.main}>
        {/*<div>*/}
        {/*    <img*/}
        {/*        src='https://static.vecteezy.com/system/resources/previews/036/226/872/non_2x/ai-generated-nature-landscapes-background-free-photo.jpg'/>*/}
        {/*</div>*/}

        <div className={st.discription}>
            <img className={st.image} src={profileData.photos.large}/>
            AVA + Disc
            <ProfileStatus profileData={profileData} profileStatus={profileStatus} />
        </div>
    </div>
}

export default ProfileInfo;