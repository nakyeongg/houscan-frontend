import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

export const BadgeWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

export const Badge = styled.p`
    height: 35px;
    border-radius: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    color: #067600;
    background-color: #A2FF9A;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 15px;
`

export const WarningBadge = styled.div`
    height: 35px;
    border-radius: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    color: #760400;
    background-color: #FF9A9A;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    padding: 0 15px;
    cursor: pointer;
    margin-bottom: 20px;
`

export const InfoIcon = styled.img`
    width: 18px;
    height: 18px;
`

export const ReasonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`

export const Reason = styled.p`
    color: #760400;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    padding-bottom: 20px;
    border-bottom: 1px solid #EEEEEE;
`

export const CategoryWrapper = styled.div`
    padding: 20px 0;
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