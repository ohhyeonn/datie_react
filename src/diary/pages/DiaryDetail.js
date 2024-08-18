import React, { useReducer, useRef, useEffect, useState } from 'react';

import RealHeader from '../../component/RealHeader';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import KakaoMap from '../components/KakaoMap';
import DiaryItem from '../components/DiaryItem';
import DiaryList from '../components/DiaryList';

function DiaryDetail() {
    const [data, setData] = useState([
        {
            id: 1,
            placeName: '고기살롱',
            location: { lat: 37.5592446970721, lng: 126.921585110366 }, // 좌표로 변환할 부분
            rate: 3,
            review: '돼지양념구이 차돌박이 다 맛있다. 김치찌개는 안먹어봐서 모르겠음',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            placeName: '피자스쿨 동교점',
            location: { lat: 37.5584174249541, lng: 126.923127572449 }, // 좌표로 변환할 부분
            rate: 1,
            review: '여기갈바에 피자빵 사먹는다',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 3,
            placeName: '포포야어묵',
            location: { lat: 37.561252237874, lng: 126.920284581233 }, // 좌표로 변환할 부분
            rate: 5,
            review: '홍대 최고의 맛집. 특히 냉모밀은 전국탑급이다',
            images: 'https://example.com/image1.jpg',
        },
        {
            id: 4,
            placeName: '도원 서교점',
            location: { lat: 37.55613463001, lng: 126.919303944728 }, // 좌표로 변환할 부분
            rate: '',
            review: '',
            images: 'https://example.com/image1.jpg',
        },
    ]);

    const locations = data.map((item) => item.location);
    const placeNames = data.map((item) => item.placeName);
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
                    <KakaoMap locations={locations} placeNames={placeNames} />
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
