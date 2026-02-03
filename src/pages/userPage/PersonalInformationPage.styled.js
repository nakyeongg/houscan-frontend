import styled from "styled-components";


export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    text-align: center;
`

export const LoadingIcon = styled.img`
    width: 80px;
    margin-bottom: 24px;
`

export const LoadingTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 12px;
`

export const LoadingDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    
    strong {
        font-weight: 600;
    }
`

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
    width: 100%;
    max-width: 520px;
    gap: 32px;
`

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Question = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
`

export const Button = styled.button`
    background-color: #007BFF;
    color: #FFFFFF;
    font-size: 18px;
    margin: 50px 0;
    padding: 10px 20px;
    border-radius: 12px;
    
    &:disabled {
        background-color: #E5E7EB;
        cursor: default;
    }
`