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
    border: 1px solid #D97706;
    color: #D97706;
    background-color: #FFFBEB;
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProcessWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #2563EB;
    color: #2563EB;
    background-color: #CEE7FF;
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CloseWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #5C5C5C;
    color: #5C5C5C;
    background-color: #E3E3E3;
    width: 84px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) =>
        theme.fonts.SUITMedium["font-family"]};
`