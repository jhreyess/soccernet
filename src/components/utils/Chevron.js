import styled, { css } from "styled-components";

const MenuToggle = styled.div`
    display: inline-block;
    padding: 0.5em;
    transition: transform 200ms ease-in-out;
    ${({isOpen}) => 
        isOpen && css`
        transform: rotate(180deg);
    `} 
    > span { 
        border-radius: 4px;
        display: inline-block;
        width: 12px;
        height: 2px;
        background-color: ${props => props.theme.textPrimary};
        &:first-child {
            transform-origin: 100% 100%;
            transform: rotate(45deg);
        }
        &:last-child {
            transform-origin: 0 0;
            transform: rotate(-45deg);
        }
    }
`;

export default function Chevron({isOpen, onClick}) {
    const handleClick = () => {
        if(onClick){
            onClick();
        }
    }
    return (
        <MenuToggle isOpen={isOpen} onClick={handleClick}>
            <span></span>
            <span></span>
        </MenuToggle> 
    )
}