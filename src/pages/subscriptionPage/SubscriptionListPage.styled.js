import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 27px;
`

export const InputWrapper = styled.div`
    border: 1px solid #ACB1C6;
    border-radius: 100px;
    height: 50px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 0;
    width: 100%;
    &::placeholder {
        color: #ACB1C6;
    }
`

export const InputIcon = styled.img`
    width: 27px;
    height: 27px;
    margin-left: 4px;
`