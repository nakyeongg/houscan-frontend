import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/MainPage';
import LoginPage from './pages/userPage/LoginPage';
import SignupPage from './pages/userPage/SignupPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
