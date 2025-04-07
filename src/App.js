import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/mainPage/MainPage'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
