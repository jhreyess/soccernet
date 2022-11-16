import React, { useContext, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

const LightModeContext = React.createContext({
    isLightMode: true,
    toggleLightMode: () => {}
});

const LightModeProvider = ({children}) => {
    const [isLightMode, setLightMode] = useState(true);
    const toggleLightMode = () => setLightMode(prev => !prev);
    return (
        <LightModeContext.Provider value={{isLightMode, toggleLightMode}}>
            {children}
        </LightModeContext.Provider>
    )
}

const ThemeProvider = ({children}) => {
    const { isLightMode } = useToggleLightMode();
    return (
        <SCThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
            {children}
        </SCThemeProvider>
    )
}

const useToggleLightMode = () => useContext(LightModeContext);

export { ThemeProvider, useToggleLightMode, LightModeProvider };