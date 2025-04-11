import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    padding: 20px 0;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
`

export const CategoryWrapper = styled.div`
    padding: 20px 0;
    gap: 12px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #EEEEEE;
`

export const Category = styled.div`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`

export const Detail = styled.div`

`

export const PdfLink = styled(Link)`
    color: ${({theme}) => theme.colors.mainColor} !important;
    text-decoration: underline;
    width: fit-content;
`