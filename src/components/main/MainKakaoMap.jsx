import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, MarkerClusterer, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

export const MainKakaoMap = () => {
    const navigate = useNavigate();
    const mapRef = useRef(null);
    const [houses, setHouses] = useState([]);
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [level, setLevel] = useState(8);

    const handleMarkerClick = (house) => {
        setSelectedHouse(house);
        const map = mapRef.current;
        if (map) {
            const currentLevel = map.getLevel();
            setLevel(currentLevel);
            const offset = currentLevel < 5 ? 0.0005 : 0.0035;
            const moveLatLon = new window.kakao.maps.LatLng(house.lat + offset, house.lng);
            map.panTo(moveLatLon);
        }
    }

    const handleOpenAnnouncements = async () => {
        try {
            const response = await axiosInstance.get('/api/announcements/open/');
            const data = response.data;
            const geocoder = new window.kakao.maps.services.Geocoder();
            const allHouses = [];

            data.forEach((announcement) => {
                announcement.housing_info_list.forEach((house) => {
                    allHouses.push({
                        ...house,
                        announcement_id: announcement.id,
                    })
                })
            })

            const coordsPromises = allHouses.map((house) => {
                return new Promise((resolve) => {
                    geocoder.addressSearch(house.address, (result, status) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            resolve({
                                ...house,
                                lat: parseFloat(result[0].y),
                                lng: parseFloat(result[0].x),
                            });
                        } else {
                            resolve(null);
                        }
                    })
                })
            })

            const results = await Promise.all(coordsPromises);
            const validHouses = results.filter((item) => item !== null);
            setHouses(validHouses);

            if (validHouses.length > 0 && mapRef.current) {
                const bounds = new window.kakao.maps.LatLngBounds();
                validHouses.forEach(house => bounds.extend(new window.kakao.maps.LatLng(house.lat, house.lng)));
                mapRef.current.setBounds(bounds);
            }
        } catch (error) {
            console.log('모집 중인 주택 가져오기 실패', error);
        }
    };

    useEffect(() => {
        handleOpenAnnouncements();
    }, []);

    return (
        <Wrapper>
            <Map
                center={{ lat: 37.5665, lng: 126.9780 }}
                style={{ width: "100%", height: "400px" }}
                level={level}
                ref={mapRef}
                onZoomChanged={(map) => setLevel(map.getLevel())}
            >
                <MarkerClusterer
                    averageCenter={true}
                    minLevel={6}
                    disableClickZoom={false}
                >
                    {houses.map((house) => (
                        <React.Fragment key={`${house.announcement_id}-${house.id}`}>
                            <MapMarker
                                key={`${house.announcement_id}-${house.id}`}
                                position={{ lat: house.lat, lng: house.lng }}
                                onClick={() => handleMarkerClick(house)}
                                image={{
                                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                                    size: { width: 24, height: 35 }
                                }}
                            />
                        </React.Fragment>
                    ))}
                </MarkerClusterer>
                {selectedHouse && (
                    <CustomOverlayMap position={{ lat: selectedHouse.lat, lng: selectedHouse.lng }} clickable={true}>
                        <InfoWrapper>
                            <CloseButton onClick={() => setSelectedHouse(null)}>✕</CloseButton>
                            <District>{selectedHouse.district}</District>
                            {selectedHouse.name && <HouseName>{selectedHouse.name}</HouseName>}
                            <Address>{selectedHouse.address}</Address>
                            <ButtonWrapper>
                                <WhiteButton onClick={() => navigate(`/subscription/${selectedHouse.announcement_id}`)}>공고 상세</WhiteButton>
                                <BlueButton onClick={() => navigate(`/house/${selectedHouse.id}`)}>주택 상세</BlueButton>
                            </ButtonWrapper>
                        </InfoWrapper>
                    </CustomOverlayMap>
                )}
            </Map>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 40px;
    overflow: hidden;
`

const InfoWrapper = styled.div`
    background: white;
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    bottom: 140px; 
    min-width: 220px;
    z-index: 10;

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-top: 10px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
`

const District = styled.span`
    font-size: 10px;
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    color: #666;
`

const HouseName = styled.h4`
    font-size: 15px;
    margin-top: 5px;
    font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`

const Address = styled.p`
    font-size: 12px;
    color: #888;
    margin-top: 5px;
    margin-bottom: 12px;
    line-height: 1.4;
`

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    color: #aaa;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
`

const WhiteButton = styled.button`
    width: 50%;
    padding: 8px;
    font-size: 12px;
    border-radius: 6px;
    border: 1px solid #eeeeee;
    font-family: ${({ theme }) => theme.fonts.SUITMedium["font-family"]};
`

const BlueButton = styled.button`
    width: 50%;
    padding: 8px;
    font-size: 12px;
    border-radius: 6px;
    border: 1px solid #eeeeee;
    background: ${props => props.theme.colors.mainColor};
    color: white;
    font-family: ${({ theme }) => theme.fonts.SUITMedium["font-family"]};
`