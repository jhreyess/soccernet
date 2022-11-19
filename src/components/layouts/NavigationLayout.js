import { useState, useEffect } from "react";
import styled from "styled-components";
import { useToggleLightMode } from "../theme/ThemeProvider";
import NavMenu from "./NavMenu";
import Logo from "../../assets/Logo.svg";
import LogoDark from "../../assets/LogoDark.svg";
import Hamburger from "../utils/Hamburger";
import ThemeToggler from "../utils/Toggler";

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25em;
    background-color: ${props => props.theme.main };
    height: 3.5em;
`

const Branding = styled.img`
    padding: 0.75em 0;
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
`

export default function NavigationLayout() {
    const { isLightMode, toggleLightMode } = useToggleLightMode()
    const [ isMenuOpen, openMenu ] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;
    
    return (
        <Wrapper>
            <Branding src={isLightMode ? Logo : LogoDark} alt="logo" />
            <Navbar>
                <NavMenu isMobile={isMobile} isOpen={isMenuOpen} />
                <ThemeToggler isOn={isLightMode} onClick={toggleLightMode} />
                { isMobile && <Hamburger onClick={() => {openMenu(prev => !prev)}} /> }
            </Navbar>
        </Wrapper>
    );
}