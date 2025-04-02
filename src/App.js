import React, {lazy, Suspense, useEffect} from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Dialogs from "./components/dialogs/dialogs";
import {HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Set from "./components/settings/settings";
import LoginPage from "./components/login/login";
import HeaderApi from "./components/header/headerApi";
import Preloader from "./components/common/preloader/preloader";
import Albums from "./components/music/albums/albums";
import Artist from "./components/music/artists/artist/artist";
import Playlists from "./components/music/playlists/playlists";
import Artists from "./components/music/artists/artists";
import Track from "./components/music/track/track";
import Album from "./components/music/albums/album/album";


const ProfileApi = lazy(() => import("./components/profile/profileApi"));
const UsersApi = lazy(() => import("./components/users/usersApi"));
const MusicApi = lazy(()=> import("./components/music/musicApi"))
const App = () => {
    return (
        <HashRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <div className="app-wrapper">
                <HeaderApi/>
                <div className="app-AllSection">
                    <Nav/>
                    <div className="content">
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/profile/:userID?" element={<ProfileApi/>}/>
                                <Route path="/dialogs/*" element={<Dialogs/>}/>
                                <Route path="/news/general" element={<News/>}/>
                                <Route path="/music" element={<MusicApi/>}/>
                                <Route path="/settings" element={<Set/>}/>
                                <Route path="/users" element={<UsersApi/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/music/artists" element={<Artists/>} />
                                <Route path="/music/artist/:id" element={<Artist />} />
                                <Route path="/music/albums" element={<Albums/>} />
                                <Route path="/music/playlists" element={<Playlists/>} />
                                <Route path="/music/artist/track/:id" element={<Track />} />
                                <Route path="/music/album/:id" element={<Album />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
