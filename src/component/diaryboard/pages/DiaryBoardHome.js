import React, { useReducer, useRef, useEffect, useState } from 'react';

import RealHeader from '../../../component/RealHeader';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function DiaryBoardHome() {
    return (
        <div>
            <div>
                <RealHeader />
                <Header title={'커뮤니티'} />
                <div className="body"></div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default DiaryBoardHome;
