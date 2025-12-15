import React, { useEffect, useState } from 'react';
import * as S from './HouseDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import KakaoMap from '../../components/subscription/KakaoMap';
import KakaoRoadview from '../../components/subscription/KakaoRoadview';
import { useParams } from 'react-router-dom';
import axiosInstance from './../../apis/axiosInstance';

const HouseDetailPage = () => {
    const {id} = useParams();
    const [house, setHouse] = useState();

    const handleHouse = async () => {
        try {
            const response = await axiosInstance.get(`/api/announcements/house/${id}`);
            console.log('주택 정보 가져오기 성공', response);
            const houseData = response.data.housing_info;
            setHouse(houseData);
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
                {house && (
                    <>
                        <S.House>{house.name ? house.name : house.address}</S.House>
                        {(house.address!=="null" && house.address!==null) && (
                            <S.MapWrapper>
                                <KakaoMap address={house.address} placeName={house.name ? house.name : house.address}/>
                                <KakaoRoadview address={house.address} />
                            </S.MapWrapper>
                        )}
                        <S.Wrapper>
                            {(house.address!=="null" && house.address!==null) && (
                                <S.CategoryWrapper>
                                    <S.Title>주소</S.Title>
                                    <p>{house.address}</p>
                                </S.CategoryWrapper>
                            )}
                            {house.total_households && (
                                <S.CategoryWrapper>
                                    <S.Title>총 세대수</S.Title>
                                    <p>{house.total_households}호</p>
                                </S.CategoryWrapper>
                            )}
                            {house.supply_households.length > 0 && (
                                <S.CategoryWrapper>
                                    <S.HouseCategoryWrapper>
                                            <S.Title>공급호수</S.Title>
                                            <S.Title>유형</S.Title>
                                            <S.Title>주택형</S.Title>
                                    </S.HouseCategoryWrapper>
                                    {house.supply_households.map((supply, index) => (
                                        <S.HouseCategoryWrapper key={index}>
                                            <S.HouseCategoryContent>
                                                <p>{supply}호</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{(house.type[index] && house.type.length > index) ? house.type[index] : "유형 없음"}</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{(house.house_type[index] && house.house_type.length > index) ? house.house_type[index] : "주택형 없음"}</p>
                                            </S.HouseCategoryContent>
                                        </S.HouseCategoryWrapper>
                                    ))}
                                </S.CategoryWrapper>
                            )}
                            {house.elevator!==null && (
                                <S.CategoryWrapper>
                                    <S.Title>승강기</S.Title>
                                    <p>{house.elevator ? "있음" : "없음"}</p>
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
