import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ProgressBar = () => {
    const navigate = useNavigate();

    const max = 120;
    const [available, setAvailable] = useState(120);

    useEffect(() => {
        const timer = setInterval(() => {
            setAvailable(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (available===0) {
            navigate('/subscription');
        }
    }, [available, navigate])

    const elapsedTime = max-available;

    return (
        <>
            <Wrapper>
                <Progress width = {100-(available*100/max)}/>
            </Wrapper>
            {elapsedTime < 10 ? (
                <Desc>입력하신 개인정보를 안전하게 저장하고 있습니다.</Desc>
            ) : elapsedTime < 119 ? (
                <>
                    <Desc>입력 정보를 바탕으로 공고의 지원 자격을 정밀 분석 중입니다.</Desc>
                    <Desc2>잠시만 기다려 주세요.</Desc2>
                </>
            ) : (
                <>
                    <Desc>완료되었습니다.</Desc>
                    <Desc>기다려주셔서 감사합니다.</Desc>
                </>
            )}
        </>
    )
}

const Wrapper = styled.div`
    width: 80%;
    height: 15px;
    max-width: 700px;
    background-color: #f1f1f1;
    border-radius:12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 200px 0 10px 0;

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`

const Progress = styled.div`
    width: ${props => props.width}%;
    height: 15px;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: width 0.5s ease;
`

const Desc = styled.p`
    color: #343434;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`

const Desc2 = styled.p`
    color: #343434;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};

    @media screen and (max-width: 500px) {
        display: none;
    }

`