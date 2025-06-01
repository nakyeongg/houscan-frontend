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
    const [supplyHouseholds, setSupplyHouseholds] = useState([]);
    const [type, setType] = useState([]);
    const [houseType, setHouseType] = useState([]);

    const handleList = (data) => {
        let arr = [];
        try {
            const fixedStr = data.replace(/'/g, '"');
            arr = JSON.parse(fixedStr);
        } catch(error) {
            console.log(error);
        }
        return arr;
    }

    const handleHouse = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstace.get(`/api/announcements/house/${id}`);
            console.log('주택 정보 가져오기 성공', response);
            setHouse(response.data.housing_info);
            const tempSupply = handleList(response.data.housing_info.supply_households);
            const tempType = handleList(response.data.housing_info.type);
            const tempHouseType = handleList(response.data.housing_info.house_type);
            setSupplyHouseholds(tempSupply);
            setType(tempType);
            setHouseType(tempHouseType);
            setIsLoading(false);
        } catch(error) {
            console.log('주택 정보 가져오기 에러', error);
        }
    }

    // 공급 호수를 모두 더해서 총 호수를 계산
    const handleTotalHouseholds = (house) => {
        let total = 0;
        try {
            const fixedStr = house.replace(/'/g, '"');
            const arr = JSON.parse(fixedStr);

            arr.forEach((item) => {
                const cleaned = item.endsWith('호') ? item.slice(0, -1) : item;
                const num = parseInt(cleaned, 10);
                if (!isNaN(num)) {
                    total += num;
                }
            }) 
        } catch(error) {
            console.log(error);
        }
        return total;
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
                        <S.House>{house.name ? house.name : house.address}</S.House>
                        {(house.address!=="null" && house.address!==null) && (
                            <KakaoMap address={house.address} placeName={house.name ? house.name : house.address}/>
                        )}
                        <S.Wrapper>
                            {(house.address!=="null" && house.address!==null) && (
                                <S.CategoryWrapper>
                                    <S.Title>주소</S.Title>
                                    <p>{house.address}</p>
                                </S.CategoryWrapper>
                            )}
                            {house.supply_households && (
                                <S.CategoryWrapper>
                                    <S.Title>총 세대수</S.Title>
                                    <p>{handleTotalHouseholds(house.supply_households)}호</p>
                                </S.CategoryWrapper>
                            )}
                            {supplyHouseholds && (
                                <S.CategoryWrapper>
                                    <S.HouseCategoryWrapper>
                                            <S.Title>공급호수</S.Title>
                                            <S.Title>유형</S.Title>
                                            <S.Title>주택형</S.Title>
                                    </S.HouseCategoryWrapper>
                                    {supplyHouseholds.map((supply, index) => (
                                        <S.HouseCategoryWrapper key={index}>
                                            <S.HouseCategoryContent>
                                                <p>{supply}</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{type[index]}</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{houseType[index]}</p>
                                            </S.HouseCategoryContent>
                                        </S.HouseCategoryWrapper>
                                    ))}
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
