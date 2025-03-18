import Header from "./header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAuth} from "../../redux/thunk";

const HeaderApi = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.auth);

    useEffect(() => {
       dispatch(getAuth());
    }, [dispatch]);

    return <Header userData={userData} />;
};

export default HeaderApi;
