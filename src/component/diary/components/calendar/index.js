import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 변경
import {
    StyledCalendarWrapper,
    StyledCalendar,
    StyledDate,
    StyledToday,
    StyledDot,
} from './styles';
import moment from 'moment';

const DogInfo = () => {
    const navigate = useNavigate(); // 변경
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(today);
    const attendDay = ['2024-08-03', '2024-08-13']; // Example attendance dates

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
        navigate(`/diary/detail/${formattedDate}`);
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
                    if (
                        view === 'month' &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate()
                    ) {
                        html.push(<StyledToday key="today">오늘</StyledToday>);
                    }
                    if (
                        attendDay.find(
                            (x) => x === moment(date).format('YYYY-MM-DD'),
                        )
                    ) {
                        html.push(
                            <StyledDot
                                key={moment(date).format('YYYY-MM-DD')}
                            />,
                        );
                    }
                    return <>{html}</>;
                }}
            />
        </StyledCalendarWrapper>
    );
};

export default DogInfo;
