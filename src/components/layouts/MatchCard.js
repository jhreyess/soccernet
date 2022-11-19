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
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    align-self: stretch;
    margin-bottom: 0.5em;
    > p {
        &:first-child {
            float: left;
        }
        &:last-child {
            float: right;
        }
    }
    svg {
        margin-right: 0.5em;
    }
`;

const Teams = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    align-self: stretch;
    margin-top: 1em;
    img {
        width: 5em;
        height: 5em;
    }
    > div {
        flex: 1;
        &:nth-child(2) { 
            flex: 0 0 23%;
        }
    }
`

export default function Card(props) {
    const theme = useTheme()

    return (
        <StyledCard>
            { props.header && 
                <Header>
                    <Text bold={false} secondary>{props.title || "Not found"}</Text>
                    <Text bold>
                        <FontAwesomeIcon icon={props.icon} color={theme.primary} />
                        { (props.iconInfo || "--") + "'"}
                    </Text>
                </Header>
            }
            <Teams>
                <div>
                    <img alt={props.home.name} src={props.home.logo}></img>
                    <Text level={5}>{props.home.name}</Text>
                </div>
                <div>
                    <Text level={1} bold>
                        { (props.hasScore && `${props.goals.home} - ${props.goals.away}`) || "vs." }
                    </Text>
                </div>
                <div>
                    <img alt={props.away.name}src={props.away.logo}></img>
                    <Text level={5}>{props.away.name}</Text>
                </div>
            </Teams>
            { props.actionable && <Chevron /> }
        </StyledCard>
    )
}