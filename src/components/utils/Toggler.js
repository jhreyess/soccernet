import styled, { css } from "styled-components";

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

export default function Toggler(props) {
    const handleClick = () => {
        if(props.onClick){
            props.onClick();
        }
    }
    return <ThemeToggler isOn={props.isOn} onClick={handleClick} />
}