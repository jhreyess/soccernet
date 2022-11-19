import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../utils/Text";
import Chevron from "../utils/Chevron";

const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${(props) => props.theme.cardBackground};
    padding: 0.75em;
    box-sizing: border-box;
    &:not(:last-child):after {
        content: "";
        width: 95%;
        margin-top: 1em;
        height: 1px;
        background-color: ${(props) => props.theme.cardBorder};
    }
    @media(min-width: 768px){
        border-radius: 10px;
        border: 1px solid ${(props) => props.theme.cardBorder};
        &:not(:last-child):after {
            content: unset;
        }
    }
`;

const Header = styled.div`
    align-self: stretch;
    margin-bottom: 1em;
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
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: stretch;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    > div {
        flex: 1;
        &:nth-child(2) { 
            flex: 0 0 23%;
        }
        .img-wrapper {
            height: 4em;
        }
    }
`;

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
                    <div className="img-wrapper"><img alt={props.home.name} src={props.home.logo}></img></div>
                    <Text level={5}>{props.home.name}</Text>
                </div>
                <div>
                    <Text level={1} bold>
                        { (props.hasScore && `${props.goals.home} - ${props.goals.away}`) || "vs." }
                    </Text>
                </div>
                <div>
                    <div className="img-wrapper"><img alt={props.away.name}src={props.away.logo}></img></div>
                    <Text level={5}>{props.away.name}</Text>
                </div>
            </Teams>
            { props.actionable && <Chevron /> }
        </StyledCard>
    )
}