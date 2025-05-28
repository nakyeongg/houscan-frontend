import React, { useState } from 'react';
import styled from 'styled-components';
import { houseData } from '../../constant/houseData';
import { Pagination } from './Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const HouseList = ({ houses, display }) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    console.log('houses',houses);

    const handleHouse = (house) => {
        navigate(`/house/${house.id}`);
    }

    const handlePageChange = ({ selected }) => {
        setPage(selected + 1);
    };

    const offset = (page - 1) * 10;
    const currentPageData = houses.slice(offset, offset + 10);

    return (
        <Wrapper>
            <TopWrapper>
                <RegionWrapper>
                    <p>자치구</p>
                </RegionWrapper>
                <TopHouseWrapper>
                    <p>대상주택</p>
                </TopHouseWrapper>
                <NumberWrapper>
                    <p>총 세대수</p>
                </NumberWrapper>
            </TopWrapper>
            <Line></Line>
            {currentPageData.map((house, index) => (
                <SubscriptionWraper key={index}>
                    <RegionWrapper>
                        <p>{house.region}</p>
                    </RegionWrapper>
                    <HouseWrapper onClick={()=>handleHouse(house)}>
                        <p>{house.name}</p>
                    </HouseWrapper>
                    <NumberWrapper>
                        <p>{house.supply_households}</p>
                    </NumberWrapper>
                </SubscriptionWraper>
            ))}
            <Pagination
                length={houseData.length}
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

const RegionWrapper = styled.div`
    width: 49px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    margin-right: 10px;
`

const TopHouseWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    margin-right: 10px;
`

const HouseWrapper = styled.button`
    width: 100%;
    max-width: 100%;
    margin-right: 10px;
    text-align: left;
`

const NumberWrapper = styled.div`
    width: 53px;
    min-width: 53px;

    @media screen and (max-width: 450px) {
        display: none;
    }
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
