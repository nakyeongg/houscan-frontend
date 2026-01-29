import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { PendingBadge, ProcessBadge, ClosedBadge } from './Badge';
import { Pagination } from './Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

export const SubscriptionList = ({ display, rank, limit }) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const prevRankRef = useRef(rank);
    const page = parseInt(searchParams.get('page') || '1', 10);

    console.log('rank', rank);

    const hadleSubscription = async () => {
        try {
            const response = await axiosInstance.get('/api/announcements/');
            console.log('공고 리스트 가져오기', response);
            setSubscriptions(response.data);
        } catch (error) {
            console.log('공고 가져오기 에러', error);
        }
    }

    useEffect(() => {
        hadleSubscription();
    }, [])

    const handlePageChange = ({ selected }) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', selected + 1);
        setSearchParams(newParams);
    }

    useEffect(() => {
        if (prevRankRef.current !== rank) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('page', '1');
            setSearchParams(newParams, { replace: true });
            prevRankRef.current = rank;
        }
    }, [rank])

    let filteredSubscriptions = subscriptions;
    if (rank) {
        filteredSubscriptions = subscriptions.filter(subscription => {
            const analysis = subscription.analysis;
            if (!analysis || analysis.is_eligible !== true) return false;

            const priorityText = analysis.priority || '';
            const rankMatches = priorityText.includes(rank);

            return rankMatches;
        })
    }

    const offset = (page - 1) * 10;
    const currentPageData = limit
        ? filteredSubscriptions.slice(0, limit)
        : filteredSubscriptions.slice(offset, offset + 10);

    return (
        <Wrapper>
            <TopWrapper>
                <TopTitleWrapper>
                    <p>제목</p>
                </TopTitleWrapper>
                <DateWrapper>
                    <p>모집기간</p>
                </DateWrapper>
                <StateWrapper>
                    <p>모집상태</p>
                </StateWrapper>
            </TopWrapper>
            <Line></Line>
            {currentPageData.map((subscription, index) => (
                <SubscriptionWraper key={index}>
                    <TitleWrapper to={`/subscription/${subscription.id}`}>
                        <p>{subscription.title}</p>
                    </TitleWrapper>
                    <DateWrapper>
                        <p>{subscription.announcement_date}</p>
                    </DateWrapper>
                    <StateWrapper>
                        {
                            subscription.status === 'upcoming' ? <PendingBadge /> :
                                subscription.status === 'open' ? <ProcessBadge /> :
                                    <ClosedBadge />
                        }
                    </StateWrapper>
                </SubscriptionWraper>
            ))}
            <Pagination
                length={filteredSubscriptions.length}
                handlePageChange={handlePageChange}
                display={display}
                forcePage={page - 1}
            />
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

    @media screen and (max-width: 600px) {
        padding: 0 10px 15px 10px
    }
`

const TopTitleWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    margin-right: 10px;
`

const TitleWrapper = styled(Link)`
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

    @media screen and (max-width: 600px) {
        margin: 0 10px;
    }
`
