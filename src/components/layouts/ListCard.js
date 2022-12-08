import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Text from "../utils/Text";

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:not(:last-child) > article:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 95%;
        margin-top: 1em;
        height: 1px;
        background-color: ${(props) => props.theme.cardBorder};
    }
    @media(min-width: 768px){
        &:not(:last-child) > article:after {
            content: unset;
        }
    }
`;

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
                    padding: 0.5em;
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
                    height: 100%;
                    position: absolute;
                    left: 0;
                    border-radius: 8px;
                    background-color: ${(props) => props.theme.cardLightBackground };
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
    const handleClick = () => {
        if(props.onClick){
            props.onClick();       
        }
    }
    const card = (
        <StyledCard vertical={props.vertical} decorate={props.decorate} onClick={handleClick}>
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
    return (        
        props.to 
            ? <StyledLink to={`${props.to}`}>{card}</StyledLink>
            : card        
    )
}