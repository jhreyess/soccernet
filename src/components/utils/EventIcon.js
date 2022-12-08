import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { useTheme } from "styled-components";

const RefereeCard = styled.div`
    display: inline-block;
    height: 1.15em;
    width: 0.75em;
    background-color: ${props => props.red ? "#FF1A1A" : "#FFD91A"};
    border: 1px solid ${props => props.red ? "#E50000" : "#E5BF00"};
    border-radius: 2px;
    transform: rotate(-17deg);
`


export default function EventIcon(props){
    const theme = useTheme();

    const icon = () => {
        switch(props.type){
            case "Normal Goal":
                return <FontAwesomeIcon icon={'futbol'} color={theme.textPrimary} />
            case "Yellow Card":
                return <RefereeCard red={false} />
            case "Red Card":
                return <RefereeCard red={true} />
            default: return <FontAwesomeIcon icon={'futbol'} color={theme.textPrimary} />
        }
    }

    return icon();
}