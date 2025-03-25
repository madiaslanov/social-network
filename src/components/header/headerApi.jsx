import Header from "./header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, logout } from "../../redux/thunk";
import { useNavigate } from "react-router-dom";

const HeaderApi = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth);
    const isAuth = useSelector((state) => state.auth.isAuth);

    const logOutUser = () => {
        dispatch(logout());
    };

    useEffect(() => {
        dispatch(getAuth());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);


    return <Header userData={userData} logOutUser={logOutUser} isAuth={isAuth} />;
};

export default HeaderApi;
