import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = styled.nav`
    transition: all 0.3s ease-in;
    ${({mobile}) => 
        mobile && css`
            position: absolute;
            top: 3.5em;
            left: 0;
            width: 100%;
            background-color: ${props => props.theme.light ? "#FFFFFF" : "#000000" };
            height: ${props => props.open ? "calc(100vh - 3.5em)" : "0px" };
            overflow-y: auto;
        `
    }
    > ul {        
        margin: 0;
        padding: 0;
        list-style: none;
    }
    > ul li {
        display: ${props => props.mobile ? "block" : "inline-block" };
        margin: 0 1em;
        vertical-align: middle
        &:first-child {
            margin-left: 0;
        }
        ${({mobile}) => 
            mobile && css`
            margin: 0;
            padding: 1em 2em;
        `} 
    }
    > ul li a {
        text-decoration: none;   
        font-weight: 700;
        color: inherit;
    }
`;

export default function Navmenu({isMobile, isOpen}) {
    return (
        <Nav mobile={isMobile} open={isOpen}>
            <ul>
                {isMobile
                    ? <li><NavLink to="/">Inicio</NavLink></li>
                    : <li><NavLink to="/"><FontAwesomeIcon icon="house" /></NavLink></li>
                }
                <li><NavLink to="live">En vivo</NavLink></li>
                <li><NavLink to="players">Jugadores</NavLink></li>
                <li><NavLink to="teams">Equipos</NavLink></li>
                <li><NavLink to="leagues">Ligas</NavLink></li>
                <li><NavLink to="bets">Predicciones</NavLink></li>
            </ul>
        </Nav>
    );
}