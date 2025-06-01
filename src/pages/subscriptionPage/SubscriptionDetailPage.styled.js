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
    /* gap: 12px; */
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #EEEEEE;
`

export const Category = styled.div`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    margin-bottom: 12px;
`

export const MiniCategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const MiniCategory = styled.div`
    font-size: 17px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`

export const Score = styled.div`
    font-size: 17px;
    color: #FF0000;
`

export const RowWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    margin-top: 3px;
`

export const PdfLink = styled(Link)`
    color: ${({theme}) => theme.colors.mainColor} !important;
    text-decoration: underline;
    width: fit-content;
`

export const ChatbotButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    bottom: 55px;
    right: 30px;
    z-index: 1;

    &:hover {
        opacity: 0.8;
    }
`

export const ChatbotIcon = styled.img`
    width: 100%;
    height: 100%;
`