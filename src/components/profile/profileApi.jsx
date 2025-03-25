import Profile from "./profile";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {getProfile, savePhotoThunk, setUserStatus} from "../../redux/thunk";

const ProfileApi = () => {
    const dispatch = useDispatch();
    const {userID} = useParams();
    const navigate = useNavigate();
    const isAuthState = useSelector((state) => state.auth.isAuth);
    const myId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        if (!isAuthState) {
            navigate(`/login`, {replace: true});
            return;
        }

        const profileId = userID || myId;

        if (!profileId) {
            console.error("Нет userID и myId для загрузки профиля!");
            return;
        }

        if (!userID && profileId !== myId) {
            navigate(`/profile/${profileId}`, {replace: true});
            return;
        }

        dispatch(getProfile(profileId));
        dispatch(setUserStatus(profileId));
    }, [userID, myId, dispatch, navigate, isAuthState]);


    const savePhoto = (file) => {
        if (file) {
            dispatch(savePhotoThunk(file));
        }
    };

    const isOwner = !userID || myId?.toString() === userID.toString();
    const profileData = useSelector((state) => state.profilePages.profile);
    const profileStatus = useSelector((state) => state.profilePages.status);
    const profilePhoto = useSelector((state) => state.profilePages.photos);


    return <Profile isOwner={isOwner} profileData={profileData} profileStatus={profileStatus}
                    profilePhoto={profilePhoto} savePhoto={savePhoto}/>;
};

export default ProfileApi;
