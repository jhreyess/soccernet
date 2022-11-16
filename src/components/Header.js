import styled, { useTheme } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../assets/Logo.svg";
import LogoDark from "../assets/LogoDark.svg";

library.add(faBars)

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em 1.25em;
    background-color: ${props => props.background};
`

export default function Header(){
    const theme = useTheme();
    return (
        <Wrapper background={theme.light ? "#FFFFFF" : "#000000"} >
            <img src={theme.light ? Logo : LogoDark} alt="logo"></img>
            <FontAwesomeIcon icon="bars" />
        </Wrapper>
    );
}