import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/MainPage';
import LoginPage from './pages/userPage/LoginPage';
import SignupPage from './pages/userPage/SignupPage';
import MyPage from './pages/userPage/MyPage';
import PersonalInformationPage from './pages/userPage/PersonalInformationPage';
import SubscriptionListPage from './pages/subscriptionPage/SubscriptionListPage';
import SubscriptionDetailPage from './pages/subscriptionPage/SubscriptionDetailPage';
import HouseDetailPage from './pages/subscriptionPage/HouseDetailPage';
import ChatbotPage from './pages/chatbotPage/ChatbotPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/information' element={<PersonalInformationPage />} />
                <Route path='/subscription' element={<SubscriptionListPage />} />
                <Route path='/subscription/:id' element={<SubscriptionDetailPage />} />
                <Route path='/house/:id' element={<HouseDetailPage />} />
                <Route path='/chatbot/:id' element={<ChatbotPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
