import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../utils/Text";
import Chevron from "../utils/Chevron";

const StyledCard = styled.div`
    flex-basis: 100%;
    background-color: ${(props) => props.theme.cardBackground};
    border: 1px solid ${(props) => props.theme.cardBorder};
    border-radius: 10px;
    padding: 0.75em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default function Card(props) {
    const theme = useTheme()

    return (
        <StyledCard>
            { props.header && 
                <Header>
                    <Text secondary>{props.title || "Not found"}</Text>
                    <Text bold>
                        <FontAwesomeIcon icon={props.icon} color={theme.primary}/>
                        {props.iconInfo || "--'"}
                    </Text>
                </Header>
            }
            {/* TODO: ADD LOCAL AND VISIT ICONS */ }
            { props.actionable && <Chevron /> }
        </StyledCard>
    )
}