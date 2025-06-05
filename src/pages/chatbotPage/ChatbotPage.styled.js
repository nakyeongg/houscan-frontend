import styled from "styled-components";

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) => 
    theme.fonts.SUITSemiBold["font-family"]};
    padding: 20px 0;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    width: 100%;
    max-width: 1000px;
`
export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-height: 100%;
    max-width: 1000px;
    padding-top: 30px;
    padding-bottom: 130px;
`

export const BotWrapper = styled.div`
    width: 100%;
    padding-right: 100px;
    gap: 20px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 450px) {
        padding-right: 30px;
    }
`

export const BotChat = styled.p`
    background-color: #F5F5F5;
    border-radius: 12px;
    padding: 20px 30px;
    font-family: ${({ theme }) => 
    theme.fonts.SUITMedium["font-family"]};
`

export const BotLoading = styled.img`
    width: 50px;
    height: 50px;
`

export const UserWrapper = styled.div`
    width: 100%;
    padding-left: 100px;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 450px) {
        padding-left: 30px;
    }
`

export const UserChat = styled.p`
    background-color: #C4E1FF;
    border-radius: 12px;
    padding: 20px 30px;
    width: fit-content;
    font-family: ${({ theme }) => 
    theme.fonts.SUITMedium["font-family"]};
`

export const InputWrapper = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
    width: 100%;
    max-width: 1000px;
    padding: 20px 12px;
`

export const Input = styled.input`
    background-color: #F5F5F5;
    border-radius: 12px;
    padding: 20px;
    width: 100%;
    border: 0;
    font-family: ${({ theme }) => 
    theme.fonts.SUITMedium["font-family"]};
    font-size: 15px;
`

export const InputButton = styled.button`
    width: 24px;
    height: 24px;
`

export const InputImg = styled.img`
    width: 100%;
    height: 100%;
`