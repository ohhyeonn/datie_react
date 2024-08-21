import React, { useEffect, useState } from 'react';

import RealHeader from '../../../component/RealHeader';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import KakaoMap from '../components/KakaoMap';
import DiaryList from '../components/DiaryList';

function DiaryDetail() {
    const [data, setData] = useState([
        {
            id: 1,
            placeName: '고기살롱',
            address: '서울 마포구 서교동 358-39',
            rate: 3,
            review: '돼지양념구이 차돌박이 다 맛있다. 김치찌개는 안먹어봐서 모르겠음',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            placeName: '피자스쿨 동교점',
            address: '서울 마포구 동교로 161',
            rate: 1,
            review: '여기갈바에 피자빵 사먹는다',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 3,
            placeName: '포포야어묵',
            address: '서울 마포구 양화로 161',
            rate: 5,
            review: '홍대 최고의 맛집. 특히 냉모밀은 전국탑급이다',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 4,
            placeName: '도원 서교점',
            address: '서울 마포구 독막로 7길 24',
            rate: '',
            review: '',
            images: 'https://example.com/image1.jpg',
        },
    ]);

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        const convertAddressToCoords = async (address) => {
            return new Promise((resolve, reject) => {
                geocoder.addressSearch(address, function (result, status) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = {
                            lat: parseFloat(result[0].y),
                            lng: parseFloat(result[0].x),
                        };
                        resolve(coords);
                    } else {
                        reject(
                            new Error(
                                'Failed to convert address to coordinates',
                            ),
                        );
                    }
                });
            });
        };

        const fetchLocations = async () => {
            const promises = data.map(async (item) => {
                const coords = await convertAddressToCoords(item.address);
                return { ...item, location: coords };
            });

            const updatedData = await Promise.all(promises);
            setLocations(updatedData.map((item) => item.location));
        };

        fetchLocations();
    }, [data]);

    const diaryData = data.map(({ id, placeName, rate, review, images }) => ({
        id,
        placeName,
        rate,
        review,
        images,
    }));

    return (
        <div>
            <div>
                <RealHeader />
                <Header title={'데이트 기록'} />
                <div className="body">
                    <KakaoMap
                        locations={locations}
                        placeNames={diaryData.map((item) => item.placeName)}
                    />
                    <DiaryList data={diaryData} />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default DiaryDetail;
