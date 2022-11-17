import styled from "styled-components";

const FilterView = styled.div`
    display: inline-block;
    padding: 0.5em;
    > span { 
        border-radius: 4px;
        display: block;
        margin: 0 auto;
        width: 25px;
        height: 2px;
        margin-top: 4px;
        background-color: ${props => props.theme.textPrimary};
        &:nth-child(2) {
            width: 17px;
        }
        &:last-child {
            width: 9px;
        }
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
            <FilterView>
                <span></span>
                <span></span>
                <span></span>
            </FilterView> 
        </div>
    )
}