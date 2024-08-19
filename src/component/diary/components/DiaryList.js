import './DiaryList.css';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';

const DiaryList = ({ data }) => {
    return (
        <div className="DiaryList">
            <div className="menu_wrapper">2020-08-16 (금)</div>
            <div className="list_wrapper">
                {data.map((item) => (
                    <DiaryItem
                        id={item.id}
                        placeName={item.placeName}
                        rate={item.rate}
                        review={item.review}
                        images={item.images}
                    />
                ))}
            </div>
        </div>
    );
};
export default DiaryList;
