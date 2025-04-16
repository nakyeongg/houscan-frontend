import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 27px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 100%;
`

export const Input = styled.input`
    position: absolute;
`

export const Text = styled.p`
    width: 75px;
    height: 35px;
    border-radius: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
    color: ${({selected}) => selected ? '#007BFF' : '#000000'};
    background-color: ${({selected}) => selected ? '#C4E0FF' : '#FFFFFF'};
    border: ${({selected}) => selected ? '1px solid #007BFF' : '1px solid #000000'};
    display: flex;
    align-items: center;
    justify-content: center;
`