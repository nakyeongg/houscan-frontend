import styled from "styled-components";

export const MapWrapper = styled.div`
    width: 100%;
    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`

export const House = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITBold["font-family"]};
    margin-bottom: 20px;
    text-align: start;
    width: 100%;
`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #EEEEEE;
    gap: 12px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`

export const HouseCategoryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`

export const HouseCategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`