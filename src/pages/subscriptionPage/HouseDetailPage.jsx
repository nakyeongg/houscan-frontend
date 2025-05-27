import React from 'react';
import * as S from './HouseDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import KakaoMap from '../../components/subscription/KakaoMap';
import { houseDetailData } from './../../constant/houseDetailData';

const HouseDetailPage = ({ house }) => {
    console.log('window.kakao',window.kakao);
    return (
        <>
            <Header />
            <Layout>
                <S.House>{houseDetailData.name}</S.House>
                <KakaoMap address={houseDetailData.address} placeName={houseDetailData.name}/>
                <S.Wrapper>
                    <S.CategoryWrapper>
                        <S.Title>주소</S.Title>
                        <p>{houseDetailData.address}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>총 세대수</S.Title>
                        <p>{houseDetailData.total}호</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>승강기</S.Title>
                        <p>{houseDetailData.elevator}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>주차장</S.Title>
                        <p>{houseDetailData.parking}</p>
                    </S.CategoryWrapper>
                </S.Wrapper>
            </Layout>
            <Footer />
        </>
    )
}

export default HouseDetailPage;
