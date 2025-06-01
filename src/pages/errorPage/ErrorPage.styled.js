import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
    width: 30%;
    max-width: 350px;
    min-width: 200px;
`

export const Desc = styled.h1`
    font-family: ${({ theme }) => 
    theme.fonts.SUITSemiBold["font-family"]};
    color: ${({ theme }) => theme.colors.mainColor};
    margin-top: 20px;
    font-size: 20px;
`

export const Button = styled(Link)`
    font-size: 20px;
    color: #B5B7C0;
    margin-top: 30px;
    font-family: ${({ theme }) => 
    theme.fonts.SUITSemiBold["font-family"]};
    
    &:hover {
        text-decoration: underline;
    }
`