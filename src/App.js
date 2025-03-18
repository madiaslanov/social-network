import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/news/news';
import Music from './components/music/music';
import Set from './components/settings/settings';
import UsersApi from "./components/users/usersApi";
import ProfileApi from "./components/profile/profileApi";
import HeaderApi from "./components/header/headerApi";
import LoginPage from "./components/login/login";





const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderApi />
                <Nav />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userID?' element={<ProfileApi />} />
                        <Route path='/dialogs/*' element={<Dialogs />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Set />} />
                        <Route path='/users' element={<UsersApi />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
