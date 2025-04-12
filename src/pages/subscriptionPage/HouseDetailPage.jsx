import React from 'react';
import * as S from './HouseDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import KakaoMap from '../../components/subscription/KakaoMap';
import { HouseDetailData } from './../../constant/HouseDetailData';

const HouseDetailPage = () => {
    console.log('window.kakao',window.kakao);
    return (
        <>
            <Header />
            <Layout>
                <S.House>{HouseDetailData.name}</S.House>
                <KakaoMap address={HouseDetailData.address} placeName={HouseDetailData.name}/>
                <S.Wrapper>
                    <S.CategoryWrapper>
                        <S.Title>주소</S.Title>
                        <p>{HouseDetailData.address}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>총 세대수</S.Title>
                        <p>{HouseDetailData.total}호</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>승강기</S.Title>
                        <p>{HouseDetailData.elevator}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Title>주차장</S.Title>
                        <p>{HouseDetailData.parking}</p>
                    </S.CategoryWrapper>
                </S.Wrapper>
            </Layout>
            <Footer />
        </>
    )
}

export default HouseDetailPage;
