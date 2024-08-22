import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    StyledCalendarWrapper,
    StyledCalendar,
    StyledToday,
    StyledHeart, // 새로 생성한 StyledHeart 임포트
} from './styles';
import moment from 'moment';

const DogInfo = () => {
    const navigate = useNavigate();
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(today);
    const [attendDay, setAttendDay] = useState([]); // State to store the attendance dates

    useEffect(() => {
        // Fetch attendance dates from the API
        const fetchAttendanceDates = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8090/api/diary/confirmdate',
                    {
                        params: {
                            userno: 62, // Replace '62' with the actual userno if needed
                        },
                    },
                );
                console.log('Fetched Dates:', response.data);
                setAttendDay(
                    response.data.map((ts) => moment(ts).format('YYYY-MM-DD')),
                ); // Store the fetched dates in the attendDay state
            } catch (error) {
                console.error('Error fetching attendance dates:', error);
            }
        };

        fetchAttendanceDates();
    }, []);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };

    const handleDateClick = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        if (attendDay.includes(formattedDate)) {
            // 클릭 가능한 날짜인지 확인
            navigate(`/diary/detail/${formattedDate}`);
        }
    };

    return (
        <StyledCalendarWrapper>
            <StyledCalendar
                value={date}
                onClickDay={handleDateClick}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format('D')}
                formatYear={(locale, date) => moment(date).format('YYYY')}
                formatMonthYear={(locale, date) =>
                    moment(date).format('YYYY. MM')
                }
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                activeStartDate={activeStartDate}
                onActiveStartDateChange={({ activeStartDate }) =>
                    setActiveStartDate(activeStartDate)
                }
                tileContent={({ date, view }) => {
                    let html = [];
                    const formattedDate = moment(date).format('YYYY-MM-DD');
                    if (
                        view === 'month' &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate()
                    ) {
                        html.push(<StyledToday key="today"></StyledToday>);
                    }
                    if (attendDay.includes(formattedDate)) {
                        html.push(
                            <StyledHeart key={formattedDate}>♡</StyledHeart>, // 하트를 표시
                        );
                    }
                    return <>{html}</>;
                }}
            />
        </StyledCalendarWrapper>
    );
};

export default DogInfo;
