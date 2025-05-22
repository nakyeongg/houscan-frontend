import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PendingBadge, ProcessBadge, ClosedBadge } from './Badge';
import { Pagination } from './Pagination';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

export const SubscriptionList = ({ display }) => {
    const [subscriptions, setSubscriptions]= useState([]);
    const [page, setPage] = useState(1);

    const hadleSubscription = async () => {
        try {
            const response = await axiosInstance.get('/api/announcements/');
            console.log('공고 리스트 가져오기', response);
            setSubscriptions(response.data);
        } catch(error) {
            console.log('공고 가져오기 에러', error);
        }	
    }

    // const 

    useEffect(() => {
        hadleSubscription();
    }, [])

    const handlePageChange = ({ selected }) => {
        setPage(selected + 1);
    };

    const offset = (page - 1) * 10;
    const currentPageData = subscriptions.slice(offset, offset + 10);

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
                        <p>{subscription.file_name}</p>
                    </TitleWrapper>
                    <DateWrapper>
                        <p>{subscription.posted_date}</p>
                    </DateWrapper>
                    <StateWrapper>
                        {
                            subscription.state==='upcoming' ? <PendingBadge /> :
                            subscription.state==='open' ? <ProcessBadge /> :
                            <ClosedBadge />
                        }
                    </StateWrapper>
                </SubscriptionWraper>
            ))}
            <Pagination
                length={subscriptions.length}
                handlePageChange={handlePageChange}
                display={display}
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
    border: 1px solid red;
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
