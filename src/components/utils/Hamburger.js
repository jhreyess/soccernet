import styled from "styled-components";

const MenuToggle = styled.div`
    display: inline-block;
    padding: 0.5em;
    > span { 
        border-radius: 4px;
        display: block;
        width: 25px;
        height: 2px;
        margin-top: 6px;
        background-color: ${props => props.theme.textPrimary};
    }
`;

export default function Hamburger(props) {
    const handleClick = () => {
        if(props.onClick){
            props.onClick();
            
        }
    }
    return (
        <div onClick={handleClick}>
            <MenuToggle>
                <span></span>
                <span></span>
                <span></span>
            </MenuToggle> 
        </div>
    )
}