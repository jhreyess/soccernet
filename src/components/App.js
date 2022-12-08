import { Outlet } from 'react-router-dom';

import { LightModeProvider, ThemeProvider } from "./theme/ThemeProvider"
import { GlobalStyles } from "./theme/GlobalStyles";

import NavigationLayout from "./layouts/NavigationLayout";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faList, faMagnifyingGlass, faClock, faFutbol} from "@fortawesome/free-solid-svg-icons"
import { Section, LayoutView } from './layouts/Wrappers';
library.add(faHouse, faList, faMagnifyingGlass, faClock, faFutbol);

export default function App(){
    return (
        <LightModeProvider>
            <ThemeProvider>
                <GlobalStyles />
                <NavigationLayout />
                <Section>
                    <LayoutView>
                        <Outlet />
                    </LayoutView>
                </Section>
            </ThemeProvider>
        </LightModeProvider>
    )
}