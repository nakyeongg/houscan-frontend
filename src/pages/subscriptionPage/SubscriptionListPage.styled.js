import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 27px;

    @media screen and (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
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
    color: ${({ selected }) => selected ? '#007BFF' : '#000000'};
    background-color: ${({ selected }) => selected ? '#C4E0FF' : '#FFFFFF'};
    border: ${({ selected }) => selected ? '1px solid #007BFF' : '1px solid #000000'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const DropdownWrapper = styled.div`
    display: flex;
    gap: 12px;
    z-index: 1;
    justify-content: flex-end;
`

export const Dropdown = styled.div`
    position: relative;
    width: 120px;
`

export const DropdownSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 40px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    background-color: #FFFFFF;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
`

export const DropdownImg = styled.img`
    width: 14px;
    height: 14px;
`

export const DropdownOptionWrapper = styled.ul`
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    list-style: none;
    padding: 5px 0;
    margin: 0;
    overflow: hidden;
    z-index: 20;
`

export const DropdownOption = styled.li`
    padding: 10px 15px;
    font-size: 14px;
    color: #4B4B4B;
    cursor: pointer;

    &:hover {
        background-color: #F8FBFF;
        color: #343434;
        font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
    }
`