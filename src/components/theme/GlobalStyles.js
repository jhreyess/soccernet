import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body { 
        font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: ${({theme}) => theme.background };
        color: ${({theme}) => theme.textPrimary };
    }
`