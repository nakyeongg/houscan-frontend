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
    const [supplyHouseholds, setSupplyHouseholds] = useState([]);
    const [type, setType] = useState([]);
    const [houseType, setHouseType] = useState([]);

    const handleList = (data) => {
        if (!data) return [];
        
        let arr = [];
        const dataStr = String(data).trim();

        try {
            if (dataStr.startsWith('[') && dataStr.endsWith(']')) {
                const fixedStr = dataStr.replace(/'/g, '"');
                arr = JSON.parse(fixedStr);
            } else if (dataStr.startsWith('"') && dataStr.endsWith('"')) {
                const innerStr = dataStr.slice(1, -1).replace(/'/g, '"');
                arr = JSON.parse(innerStr);
            } else {
                arr = [dataStr];
            }
        } catch(error) {
            console.log(error);
            return [];
        }
        
        return Array.isArray(arr) ? arr : [];
    }

    const handleHouse = async () => {
        try {
            const response = await axiosInstance.get(`/api/announcements/house/${id}`);
            console.log('주택 정보 가져오기 성공', response);
            const houseData = response.data.housing_info;
            setHouse(houseData);
            const tempSupply = handleList(houseData.supply_households);
            const tempType = handleList(houseData.type);
            const tempHouseType = handleList(houseData.house_type);
            setSupplyHouseholds(tempSupply);
            setType(tempType);
            setHouseType(tempHouseType);
        } catch(error) {
            console.log('주택 정보 가져오기 에러', error);
        }
    }

    const handleHouseholds = (house) => {
        let total = 0;
            try {
                const item = String(house);
                const cleaned = item.replace(/호|세대|실/g, '').trim(); 
                const num = parseInt(cleaned, 10);
                return isNaN(num) ? 0 : num;
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
                            {house.supply_households && (
                                <S.CategoryWrapper>
                                    <S.Title>총 세대수</S.Title>
                                    <p>{handleHouseholds(house.supply_households || house.total_households)}호</p>
                                </S.CategoryWrapper>
                            )}
                            {Array.isArray(supplyHouseholds) && supplyHouseholds.length > 0 && (
                                <S.CategoryWrapper>
                                    <S.HouseCategoryWrapper>
                                            <S.Title>공급호수</S.Title>
                                            <S.Title>유형</S.Title>
                                            <S.Title>주택형</S.Title>
                                    </S.HouseCategoryWrapper>
                                    {supplyHouseholds.map((supply, index) => (
                                        <S.HouseCategoryWrapper key={index}>
                                            <S.HouseCategoryContent>
                                                <p>{supply.endsWith('호') ? supply.slice(0, -1) : supply}호</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{(type[index] && type.length > index) ? type[index] : "유형 없음"}</p>
                                            </S.HouseCategoryContent>
                                            <S.HouseCategoryContent>
                                                <p>{(houseType[index] && houseType.length > index) ? houseType[index] : "주택형 없음"}</p>
                                            </S.HouseCategoryContent>
                                        </S.HouseCategoryWrapper>
                                    ))}
                                </S.CategoryWrapper>
                            )}
                            {house.elevator && (
                                <S.CategoryWrapper>
                                    <S.Title>승강기</S.Title>
                                    <p>{house.elevator}</p>
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
