import styled from "styled-components";

export const More = styled.div`
    margin: 20px 0 50px 0;
    text-align: center;
    color: #B5B7C0;
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`