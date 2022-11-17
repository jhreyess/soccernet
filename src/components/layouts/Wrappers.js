import styled from "styled-components";

export const Section = styled.section`
    padding-top: 2em;
    padding-bottom: 2em;
`;

export const LayoutView = styled.div`
    margin: 0 1.25em;
`;

export const PageHeaderView = styled.div`
    margin-bottom: 1em;
    > div {
        position: relative;
        margin-bottom: 1em;
        &:first-child > div:last-child{ 
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`;

export const ContentView = styled.div`
    display: flex;
`;
