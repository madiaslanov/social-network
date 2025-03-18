import Profile from "./profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {getProfile, setUserStatus} from "../../redux/thunk";

const ProfileApi = () => {
    const dispatch = useDispatch();
    const { userID } = useParams();
    const navigate = useNavigate();
    const isAuthState = useSelector((state) => state.auth.isAuth);
    useEffect(() => {
        if (!userID) {
            navigate("/profile/32054", { replace: true });
            return;
        }
        if(!isAuthState) return navigate("/login");
        dispatch(getProfile(userID));
        dispatch(setUserStatus(userID));
    }, [userID, dispatch, navigate, isAuthState]);

    const profileData = useSelector((state) => state.profilePages.profile);
    const profileStatus = useSelector((state) => state.profilePages.status);


    return <Profile profileData={profileData} profileStatus={profileStatus} />;
};

export default ProfileApi;
