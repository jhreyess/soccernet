import { useState, useEffect } from "react";
import styled, { css, useTheme } from "styled-components";

import NavMenu from "./NavMenu";

import { useToggleLightMode } from "./theme/ThemeProvider";
import Logo from "../assets/Logo.svg";
import LogoDark from "../assets/LogoDark.svg";

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25em;
    background-color: ${props => props.theme.light ? "#FFFFFF" : "#000000" };
    height: 3.5em;
`

const Branding = styled.img`
    padding: 0.75em 0;
`

const MenuToggle = styled.div`
    display: inline-block;
    > div > span { 
        display: block;
        width: 25px;
        height: 6px;
        border-bottom: 2px solid ${props => props.theme.textPrimary};
    }
    > div {
        display: inline-block;
        padding: 0.5em;
    }
`;

const ThemeToggler = styled.div`
    position: relative;
    width: 40px;
    height: 20px;
    background: ${props => props.theme.background};
    border-radius: 20px;
    border: 1px solid ${props => props.theme.cardBorder};
    cursor: pointer;
    transition: all 200ms ease;
    ::after {
        position: absolute;
        transition: all 200ms ease;
        content: "";
        top: 2px;
        left: 2px;
        background: ${props => props.theme.cardBorder};
        width: 15px;
        height: 15px;
        border-radius: 100px;
    }
    ${({ theme, isOn }) =>
        isOn && css`
        border-color: ${theme.primary};
        ::after {
            left: 22px;
            background: ${theme.primary};
        }
    `}
`;


const HamburgerMenu = styled.div`
    > input {
        display: none;
    }
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
`

export default function Header() {
    const { isLightMode, toggleLightMode } = useToggleLightMode()
    const [ isMenuOpen, openMenu ] = useState(false);
    const theme = useTheme();

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

    const Menu =  (
        <HamburgerMenu>
            <MenuToggle>
                <div onClick={() => {openMenu(prev => !prev)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </MenuToggle> 
        </HamburgerMenu>
    );
    
    return (
        <Wrapper>
            <Branding src={theme.light ? Logo : LogoDark} alt="logo" />
            <Navbar>
                <NavMenu isMobile={isMobile} isOpen={isMenuOpen} />
                <ThemeToggler isOn={isLightMode} type="button" onClick={toggleLightMode} />
                { isMobile && Menu }
            </Navbar>
        </Wrapper>
    );
}