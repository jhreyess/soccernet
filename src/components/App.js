import { Outlet } from 'react-router-dom';

import { LightModeProvider, ThemeProvider } from "./theme/ThemeProvider"
import { GlobalStyles } from "./theme/GlobalStyles";

import Header from "./Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faList, faMagnifyingGlass, faStopwatch } from "@fortawesome/free-solid-svg-icons"
library.add(faHouse, faList, faMagnifyingGlass, faStopwatch);

export default function App(){
    return (
        <LightModeProvider>
            <ThemeProvider>
                <GlobalStyles />
                <Header />
                <Outlet />
            </ThemeProvider>
        </LightModeProvider>
    )
}