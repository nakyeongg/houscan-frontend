import React, { useEffect, useState } from 'react';
import * as S from './HouseDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import loading from '../../assets/images/loading.gif';
import KakaoMap from '../../components/subscription/KakaoMap';
import { useParams } from 'react-router-dom';
import axiosInstace from './../../apis/axiosInstance';

const HouseDetailPage = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [house, setHouse] = useState();

    const handleHouse = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstace.get(`/api/announcements/house/${id}`);
            console.log('주택 정보 가져오기 성공', response);
            setHouse(response.data.housing_info);
            console.log('집', response.data.housing_info);
            setIsLoading(false);
        } catch(error) {
            console.log('주택 정보 가져오기 에러', error);
        }
    }

    useEffect(() => {
        handleHouse();
    }, [])

    return (
        <>
            <Header />
            <Layout>
                {(isLoading || !house) ? (
                    <img src={loading} alt="loading icon" />
                ) : (
                    <>
                    <S.House>{house.name}</S.House>
                    {house.address!=="null" && (
                        <KakaoMap address={house.address} placeName={house.name}/>
                    )}
                        <S.Wrapper>
                            {house.address!=="null" && (
                                <S.CategoryWrapper>
                                    <S.Title>주소</S.Title>
                                    <p>{house.address}</p>
                                </S.CategoryWrapper>
                            )}
                            {house.total_households && (
                                <S.CategoryWrapper>
                                    <S.Title>총 세대수</S.Title>
                                    <p>{house.total_households}</p>
                                </S.CategoryWrapper>
                            )}
                            {house.elevator && (
                                <S.CategoryWrapper>
                                    <S.Title>승강기</S.Title>
                                    <p>{house.elevator==="True" ? "있음" : "없음"}</p>
                                </S.CategoryWrapper>
                            )}
                            {house.parking && (
                                <S.CategoryWrapper>
                                    <S.Title>주차장</S.Title>
                                    <p>{house.parking}</p>
                                </S.CategoryWrapper>
                            )}
                        </S.Wrapper>
                    </>
                )}
            </Layout>
            <Footer />
        </>
    )
}

export default HouseDetailPage;
