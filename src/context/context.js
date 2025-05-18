import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsLogin(true);
        }
    }, []);

    return (
        <AppContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
