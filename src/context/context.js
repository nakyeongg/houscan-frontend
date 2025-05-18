import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [islogin, setIsLogin] = useState(false);

    return (
        <AppContext.Provider value={{islogin, setIsLogin}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
