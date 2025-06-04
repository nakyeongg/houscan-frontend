import styled from "styled-components";

export const Title = styled.h1`
    margin-bottom: 40px;
    font-size: 24px;
    font-family: ${({ theme }) => 
    theme.fonts.SUITSemiBold["font-family"]};
    color: ${({ theme }) => theme.colors.mainColor};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 520px;
    margin-bottom: 28px;
`

export const Category = styled.h2`
    font-size: 20px;
`

export const ValueWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`

export const Value = styled.p`
    border-radius: 12px;
    border: 1px solid #E5E7EB;
    padding: 12px;
    width: 100%;
    cursor: default;
`

export const EditButton = styled.button`
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #FFFFFF;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 12px;
    white-space: nowrap;
    width: fit-content;
    flex-shrink: 0;
`

export const InformationButton = styled.button`
    width: 100%;
    max-width: 520px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 12px;
    color: #FFFFFF;
    font-size: 16px;
    margin-bottom: 50px;
    padding: 10px 20px;
    height: 48px;
`

export const GreyButton = styled.button`
    color: #9FA6B2;
    margin-bottom: 24px;
    font-size: 16px;

    &:hover {
        font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
    }
`