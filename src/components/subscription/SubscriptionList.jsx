import React from 'react';
import styled from 'styled-components';
import { subscriptionData } from './../../constant/subscriptionData';
import { PendingBadge, ProcessBadge, ClosedBadge } from './Badge';

export const SubscriptionList = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <TitleWrapper>
                    <p>제목</p>
                </TitleWrapper>
                <DateWrapper>
                    <p>모집기간</p>
                </DateWrapper>
                <StateWrapper>
                    <p>모집상태</p>
                </StateWrapper>
            </TopWrapper>
            <Line></Line>
            {subscriptionData.map((subscription, index) => (
                <SubscriptionWraper key={index}>
                    <TitleWrapper>
                        <p>{subscription.title}</p>
                    </TitleWrapper>
                    <DateWrapper>
                        <p>{subscription.date}</p>
                    </DateWrapper>
                    <StateWrapper>
                        { 
                            subscription.state==='pending' ? <PendingBadge /> :
                            subscription.state==='progress' ? <ProcessBadge /> :
                            <ClosedBadge />
                        }
                    </StateWrapper>
                </SubscriptionWraper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const TopWrapper = styled.div`
    border-bottom: 1px solid #EEEEEE;
    color: #B5B7C0;
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    padding: 0 40px 15px 40px;
    display: flex;
`

const TitleWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    margin-right: 10px;
`

const DateWrapper = styled.div`
    width: 162px;
    min-width: 162px;
    margin-right: 10px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`

const StateWrapper = styled.div`
    width: 84px;
    min-width: 84px;
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #EEEEEE;
`

const SubscriptionWraper = styled.div`
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 40px;
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    height: 58px;
`