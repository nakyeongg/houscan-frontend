import React from 'react';
import styled from 'styled-components';

export const ButtonModal = ({ title, blueButtonText, whtieButtonText, blueButtonClick, whiteButtonClick, desc=null }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <ButtonWrapper>
                <BlueButton onClick={blueButtonClick}>{blueButtonText}</BlueButton>
                {whtieButtonText && (
                    <WhiteButton onClick={whiteButtonClick}>{whtieButtonText}</WhiteButton>
                )}
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 16px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    background-color: #FFFFFF;
    padding: 40px 32px;
`

const Title = styled.h2`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    margin-bottom: 40px;
    text-align: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    font-size: 18px; 
`

const BlueButton = styled.button`
    width: 160px;
    height: 48px;
    background-color: #007BFF;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 160px;
    border-radius: 8px;
`

const WhiteButton = styled.button`
    width: 160px;
    height: 48px;
    background-color: #FFFFFF;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 16px;
    width: 160px;
    border: 1px solid #000000;
`

const Desc = styled.p`
    color: #9FA6B2;
    margin-bottom: 40px;
`