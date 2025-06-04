import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ placeName, address }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) return;

        const mapContainer = mapRef.current;
        const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        const map = new window.kakao.maps.Map(mapContainer, options);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: `
                    <div style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 14px;
                        width: 150px;
                        min-height: 30px;
                        padding: 10px;">
                        ${placeName}
                    </div>`,
                });
                infowindow.open(map, marker);
                map.setCenter(coords);
            }
        });
    }, [address, placeName]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default KakaoMap;
