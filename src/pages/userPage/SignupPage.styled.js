import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    margin-bottom: 40px;
    font-size: 24px;
    font-family: ${({ theme }) => 
    theme.fonts.SUITSemiBold["font-family"]};
    color: ${({ theme }) => theme.colors.mainColor};
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`

export const Name = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`

export const Input = styled.input`
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    height: 48px;
    width: 100%;
    margin-bottom: 28px;
    padding: 0 14px;

    &::placeholder {
        color: #9FA6B2;
    }

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
    }
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.mainColor};
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 12px;

    &:disabled {
        background-color: #E5E7EB;
        cursor: default;
    }
`

export const GuideWrapper = styled.div`
    display: flex;
    margin: 0 auto 10px auto;
    gap: 4px;
`

export const Guide = styled.p`
    font-size: 18px;
`

export const LoginButton = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: underline;

    &:hover {
        font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
    }
`
