import React from "react";
import styled from "styled-components";

const handleBoldText = bold => {
    switch(bold){
        case true: return "bold";
        case false: return "600";
        default: return "inherit";
    }    
}

const TextView = styled.div`
    color: ${(props) => props.isSecondary ? props.theme.textSecondary : "inherit"};
    font-weight: ${(props) => handleBoldText(props.isBold)};
`;

export default function Text(props) {
    const customTag = (props.level && `h${props.level}`) || "p" 
    return (
        <TextView as={customTag}
            isSecondary={props.secondary} 
            isBold={props.bold} 
            children={props.children} 
        />
    );
}