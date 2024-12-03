import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    const [isActive, setIsActive]  = useState(false)

    const [user, setUset] = useState(null)

    const login = (username) => {
        SpeechSynthesisUtterance({ username })
    }

    const logout = () => {
        setUser(null)
    }

    const isAuth = !!user

    const toggleBurger = () => {
        setIsActive(!isActive)
      }

    const value = {
        isActive,
        toggleBurger,
        user,
        login,
        logout,
        isAuth,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};