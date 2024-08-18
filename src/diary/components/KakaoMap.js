import React, { useEffect } from 'react';

const KakaoMap = ({ locations = [], placeNames = [] }) => {
    useEffect(() => {
        // 지도 API를 로드합니다.
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0f55f3f4dc76f68cac78d6f8bbbabb17`;
        script.async = true;
        script.onload = () => {
            // 지도를 초기화합니다.
            const mapContainer = document.getElementById('map'); // 지도를 표시할 div
            const mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };

            const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 유효한 좌표 배열을 생성합니다.
            const points = Array.isArray(locations)
                ? locations
                      .map((location) => {
                          if (
                              location &&
                              typeof location.lat === 'number' &&
                              typeof location.lng === 'number'
                          ) {
                              return new window.kakao.maps.LatLng(
                                  location.lat,
                                  location.lng,
                              );
                          }
                          return null;
                      })
                      .filter((point) => point !== null)
                : [];

            // 지도 범위를 설정하기 위한 LatLngBounds 객체를 생성합니다.
            const bounds = new window.kakao.maps.LatLngBounds();

            points.forEach((point, index) => {
                // 각 좌표에 마커를 추가합니다.
                const marker = new window.kakao.maps.Marker({
                    position: point,
                });
                marker.setMap(map);

                // 인포윈도우를 추가합니다.
                const infowindow = new window.kakao.maps.InfoWindow({
                    content: `
                        <div class="info-window">
                            <h3>${placeNames[index]}</h3>

                        </div>
                    `,
                });
                window.kakao.maps.event.addListener(marker, 'mouseover', () => {
                    infowindow.open(map, marker);
                });
                window.kakao.maps.event.addListener(marker, 'mouseout', () => {
                    infowindow.close();
                });

                // LatLngBounds 객체에 좌표를 추가합니다.
                bounds.extend(point);
            });

            // 지도의 범위를 설정합니다.
            map.setBounds(bounds);

            // 지도 범위를 재설정하는 함수입니다.
            const setBounds = () => {
                map.setBounds(bounds);
            };
        };

        document.head.appendChild(script);

        return () => {
            // 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
            document.head.removeChild(script);
        };
    }, [locations, placeNames]);

    return (
        <div>
            <div
                id="map"
                style={{ width: '100%', height: '500px', borderRadius: '10px' }}
            ></div>

            <style>
                {`
                    .info-window {
                        padding: 10px;
                        width: 200px;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                        font-size: 14px;
                        color: #333;
                    }
                    .info-window h3 {
                        margin: 0;
                        font-size: 16px;
                        color: #007aff;
                    }
                    .info-window p {
                        margin: 5px 0;
                    }
                    .info-window a {
                        color: #007aff;
                        text-decoration: none;
                        font-weight: bold;
                    }
                    .info-window a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    );
};

export default KakaoMap;
