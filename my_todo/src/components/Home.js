import React, { useState, useEffect } from 'react';

function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const MonthDay = {
        month: 'long',
        day: 'numeric'
    }
    const HourMinute = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }
    const HourMinuteTime = currentTime.toLocaleString('en-US', HourMinute);
    const MonthDayTime = currentTime.toLocaleString('en-US', MonthDay);
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    return (
        <div className="Home">
            <div className='Home_MonthDay'>{MonthDayTime}</div>
            <div className='Home_time'> {HourMinuteTime}</div>
            <div className='Home_textform'>

            </div>
        </div>
    );
};
export default Home;