import React, { useEffect, useRef, useState } from 'react';

const KakaoRoadview = ({ address }) => {
    const roadviewRef = useRef(null);
    const [isRoadviewExist, setIsRoadviewExist] = useState(true);

    useEffect(() => {
        if (!address || address === 'null' || !window.kakao || !window.kakao.maps) {
            setIsRoadviewExist(false);
            return;
        }

        const roadviewContainer = roadviewRef.current;
        setIsRoadviewExist(true);
        
        const roadview = new window.kakao.maps.Roadview(roadviewContainer);
        const roadviewClient = new window.kakao.maps.RoadviewClient();
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                roadviewClient.getNearestPanoId(coords, 50, function(panoId) {
                    if (panoId) {
                        roadview.setPanoId(panoId, coords); 
                    } else {
                        console.log('로드뷰가 제공되지 않는 위치입니다.');
                        setIsRoadviewExist(false);
                    }
                })

            } else {
                console.error('주소 검색에 실패했습니다.', status);
                setIsRoadviewExist(false);
            }
        })
        
    }, [address])

    if (!isRoadviewExist) {
        return null;
    }

    return <div ref={roadviewRef} style={{ width: '100%', height: '400px' }} />;
};

export default KakaoRoadview;