import { useState } from "react";
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";  

import Header from "./Header";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App(){
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Header />
            <button onClick={themeToggler}>Switch theme</button>
            <Outlet />
        </ThemeProvider>
    )
}