import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/MainPage';
import LoginPage from './pages/userPage/LoginPage';
import SignupPage from './pages/userPage/SignupPage';
import SubscriptionListPage from './pages/subscriptionPage/SubscriptionListPage';
import SubscriptionDetailPage from './pages/subscriptionPage/SubscriptionDetailPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/subscription' element={<SubscriptionListPage />} />
                <Route path='/subscription/detail' element={<SubscriptionDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
