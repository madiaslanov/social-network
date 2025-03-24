import React, {lazy, Suspense, useEffect} from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Dialogs from "./components/dialogs/dialogs";
import { HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Set from "./components/settings/settings";
import LoginPage from "./components/login/login";
import HeaderApi from "./components/header/headerApi";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/common/preloader/preloader";
import { initializedApp } from "./redux/thunk";





const ProfileApi = lazy(() => import("./components/profile/profileApi"));
const UsersApi = lazy(() => import("./components/users/usersApi"));

const App = () => {
    const dispatch = useDispatch();
    const initialized = useSelector((state) => state.app.initialized);

    useEffect(() => {
        dispatch(initializedApp());
    }, [dispatch]);

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="app-wrapper">
                <HeaderApi />
                <Nav />
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/profile/:userID?" element={<ProfileApi />} />
                        <Route path="/dialogs/*" element={<Dialogs />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Set />} />
                        <Route path="/users" element={<UsersApi />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                    </Suspense>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
