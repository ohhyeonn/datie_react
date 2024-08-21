import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios'; // axios 임포트

import RealHeader from '../../../component/RealHeader';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import KakaoMap from '../components/KakaoMap';
import DiaryList from '../components/DiaryList';

function DiaryDetail() {
    // const [data, setData] = useState([
    //     {
    //         diaryNo: 1,
    //         companyName: '고기살롱',
    //         companyAddress: '서울 마포구 서교동 358-39',
    //         rate: 3,
    //         review: '돼지양념구이 차돌박이 다 맛있다. 김치찌개는 안먹어봐서 모르겠음',
    //         uploadOrg: 'https://example.com/image1.jpg',
    //         uploadReal: '',
    //     },
    //     {
    //         diaryNo: 2,
    //         companyName: '피자스쿨 동교점',
    //         companyAddress: '서울 마포구 동교로 161',
    //         rate: 1,
    //         review: '여기갈바에 피자빵 사먹는다',
    //         uploadOrg: 'https://example.com/image1.jpg',
    //         uploadReal: '',
    //     },
    //     {
    //         diaryNo: 3,
    //         companyName: '포포야어묵',
    //         companyAddress: '서울 마포구 양화로 161',
    //         rate: 5,
    //         review: '홍대 최고의 맛집. 특히 냉모밀은 전국탑급이다',
    //         uploadOrg: 'https://example.com/image1.jpg',
    //         uploadReal: '',
    //     },
    //     {
    //         diaryNo: 4,
    //         companyName: '도원 서교점',
    //         companyAddress: '서울 마포구 독막로 7길 24',
    //         rate: '',
    //         review: '',
    //         uploadOrg: 'https://example.com/image1.jpg',
    //         uploadReal: '',
    //     },
    // ]);

    const { date } = useParams(); // URL에서 date 파라미터를 가져옴
    const formattedDate = moment(date, 'YYYY-MM-DD');
    const userNo = 62;
    const [locations, setLocations] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDiaryDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8090/api/diary/detail?userNo=${userNo}&confirmDate=${formattedDate.format('YYYY-MM-DD')}`,
                );
                setData(response.data); // API 응답 데이터를 state에 설정
            } catch (error) {
                console.error('Error fetching diary details:', error);
            }
        };

        fetchDiaryDetail();
    }, [62, formattedDate]);

    useEffect(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        const convertAddressToCoords = async (companyAddress) => {
            return new Promise((resolve, reject) => {
                geocoder.addressSearch(
                    companyAddress,
                    function (result, status) {
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
                    },
                );
            });
        };

        const fetchLocations = async () => {
            const promises = data.map(async (item) => {
                const coords = await convertAddressToCoords(
                    item.companyAddress,
                );
                return { ...item, location: coords };
            });

            const updatedData = await Promise.all(promises);
            setLocations(updatedData.map((item) => item.location));
        };

        if (data.length > 0) {
            // 데이터가 있을 때만 위치를 가져옴
            fetchLocations();
        }
    }, [data]);

    const diaryData = data.map(
        ({ diaryNo, companyName, rate, review, uploadOrg, uploadReal }) => ({
            diaryNo,
            companyName,
            rate,
            review,
            uploadOrg,
            uploadReal,
        }),
    );

    return (
        <div>
            <div>
                <RealHeader />
                <Header title={'데이트 기록'} />
                <div className="body">
                    <KakaoMap
                        locations={locations}
                        placeNames={diaryData.map((item) => item.companyName)}
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
