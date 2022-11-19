import styled from "styled-components";

const MenuToggle = styled.div`
    display: inline-block;
    padding: 0.5em;
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

export default function Chevron(props) {
    const handleClick = () => {
        if(props.onClick){
            props.onClick();
            
        }
    }
    return (
        <MenuToggle onClick={handleClick}>
            <span></span>
            <span></span>
        </MenuToggle> 
    )
}