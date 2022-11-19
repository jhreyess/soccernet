import styled, { css } from "styled-components";
import Text from "../utils/Text";

const StyledCard = styled.article`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.cardBackground};
    ${({vertical}) => 
        vertical && css`
            flex-direction: column;
            text-align: center;
        `
    }
    padding: 0.75em;
    box-sizing: border-box;
    position: relative;
    &:not(:last-child):after {
        content: "";
        position: absolute;
        bottom: 0;
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
    .img-wrapper {
        height: ${({vertical}) => vertical ? "6em" : "4em"};
        width: ${({vertical}) => vertical ? "6em" : "4em"};
        position: relative;
        > img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            ${({decorate}) => 
                decorate && css`
                    padding: 0 4px;
                    position: relative;
                    box-sizing: border-box;  
                `
            }
        }
        ${({decorate}) => 
            decorate && css`
                &::before { 
                    content: "";
                    width: 100%;
                    height: 80%;
                    position: absolute;
                    left: 0;
                    bottom: -8px;
                    border-radius: 8px 8px 0 0;
                    background-color: ${(props) => props.theme.primary};
                }
            `
        }
    }
`;

const Info = styled.div`
    flex-grow: 1;
    margin: ${({vertical}) => vertical ? "1em 0 0 0" : "0 0 0 1em"};
`

export default function ListCard(props) {
    return (
        <StyledCard vertical={props.vertical} decorate={props.decorate}>
            { props.image && 
                <div className="img-wrapper">
                    <img alt={props.image} src={props.image}></img>
                </div> 
            }
            <Info vertical={props.vertical}>
                { props.title &&
                    <Text level={1} bold>{props.title}</Text>
                }
                { props.subtitle &&
                    <Text secondary>{props.subtitle}</Text>
                }
            </Info>
        </StyledCard>
    )
}