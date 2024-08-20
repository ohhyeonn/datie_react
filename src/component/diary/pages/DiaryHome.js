import React, { useReducer, useRef, useEffect, useState } from 'react';

import RealHeader from '../../../component/RealHeader';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import KakaoMap from '../components/KakaoMap';
import DiaryItem from '../components/DiaryItem';
import DiaryList from '../components/DiaryList';
import Calendar from '../components/calendar/index';

function DiaryHome() {
    return (
        <div>
            <div>
                <RealHeader />
                <Header title={'데이트 기록'} />
                <div className="body">
                    <Calendar />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default DiaryHome;
