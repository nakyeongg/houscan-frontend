import React from 'react';
import styled from 'styled-components';

export const PendingBadge = () => {
    return (
        <Wrapper>
            <PendingWrapper>모집예정</PendingWrapper>
        </Wrapper>
    )
}

export const ProcessBadge = () => {
    return (
        <Wrapper>
            <ProcessWrapper>모집중</ProcessWrapper>
        </Wrapper>
    )
}

export const ClosedBadge = () => {
    return (
        <Wrapper>
            <CloseWrapper>모집마감</CloseWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`

const PendingWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #608CD9;
    color: #0048C2;
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProcessWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #0048C2;
    color: #0048C2;
    background-color: rgba(0, 123, 255, 0.24);
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CloseWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #0048C2;
    color: #0742A7;
    background-color: rgba(150, 167, 196, 0.43);
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`