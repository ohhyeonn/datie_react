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
    const { date } = useParams(); // URL에서 date 파라미터를 가져옴
    const formattedDate = moment(date, 'YYYY-MM-DD');
    const userNo = 62;
    const [locations, setLocations] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDiaryDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8090/api/diary/detail?userNo=${userNo}&confirmDate=${formattedDate.format(
                        'YYYY-MM-DD',
                    )}`,
                );
                setData(response.data); // API 응답 데이터를 state에 설정
            } catch (error) {
                console.error('Error fetching diary details:', error);
            }
        };

        fetchDiaryDetail();
    }, []);

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
        ({
            diaryNo,
            companyName,
            rate,
            review,
            uploadOrg,
            uploadReal,
            category,
        }) => ({
            diaryNo,
            companyName,
            rate,
            review,
            uploadOrg,
            uploadReal,
            category,
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
                        categorys={diaryData.map((item) => item.category)}
                    />
                    <DiaryList data={diaryData} date={formattedDate} />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default DiaryDetail;
