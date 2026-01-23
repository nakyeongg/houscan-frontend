import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

export const KakaoMap = ({ placeName, address }) => {
    const [coords, setCoords] = useState({ lat: 33.450701, lng: 126.570667 });

    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) return;

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setCoords({
                    lat: parseFloat(result[0].y),
                    lng: parseFloat(result[0].x),
                });
            }
        });
    }, [address]);

    return (
        <MapContainer>
            <Map
                center={coords}
                level={3}
                style={{ width: '100%', height: '400px' }}
            >
                <MapMarker
                    position={coords}
                    image={{
                        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                        size: { width: 24, height: 35 }
                    }}
                />
                <CustomOverlayMap position={coords} clickable={true}>
                    <InfoWrapper>
                        <HouseName>{placeName}</HouseName>
                        <Address>{address}</Address>
                    </InfoWrapper>
                </CustomOverlayMap>
            </Map>
        </MapContainer>
    )
}

const MapContainer = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`

const InfoWrapper = styled.div`
    background: white;
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    bottom: 90px;
    text-align: left;

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

const HouseName = styled.h4`
    font-size: 15px;
    color: #333333;
    font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`

const Address = styled.p`
    font-size: 12px;
    color: #888888;
    margin-top: 5px;
`