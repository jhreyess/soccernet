import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = styled.form`
    position: relative;
    > input[type=text] {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid ${(props) => props.theme.cardBorder };
        border-radius: 100px;
        padding: 0.5em 1em;
        font-family: inherit;
        font-weight: 600;
        background-color: ${(props) => props.theme.cardBackground };
        color: ${(props) => props.theme.textSecondary };
        outline: none;
        ::placeholder {
            color: ${(props) => props.theme.textSecondary}
        }
    }
    > button {
        position: absolute;
        right: 0;
        width: 2.25em;
        height: 100%;
        color: ${(props) => props.theme.main };
        background-color: ${(props) => props.theme.primary };
        outline: none;
        border: 0;
        border-radius: 0 100px 100px 0;
        font-size: 1em;
        overflow: hidden;
    }
`

export default function Searchbar(props) {
    return (
        <Search>
            <input type="text" placeholder={props.placeholder} />
            <button type="submit" title="Search"><FontAwesomeIcon icon={"magnifying-glass"}/></button>
        </Search>
    )
}