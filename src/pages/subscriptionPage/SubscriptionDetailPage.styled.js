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
    cursor: default;
`

export const WarningBadge = styled.p`
    height: 35px;
    border-radius: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    color: rgb(59, 59, 59);
    background-color:rgb(220, 220, 220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    padding: 0 15px;
    margin-bottom: 20px;
    position: relative;
    cursor: default;

    &:hover > div {
        display: flex;
    }

    &:hover > img {
        display: flex;
    }
`

export const ReasonWrapper = styled.div`
    color: #333;
    padding: 16px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background-color: rgba(255, 0, 0, 0.07);
`

export const ReasonTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 12px;
    color: #760400;
    font-family: ${({ theme }) => theme.fonts.SUITMedium["font-family"]};
`

export const Reason = styled.p`
    color: #333333;
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
    theme.fonts.SUITSemiBold["font-family"]};
    margin-bottom: 12px;
`

export const MiniCategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const MiniCategory = styled.div`
    font-size: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
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