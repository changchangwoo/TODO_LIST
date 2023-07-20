import React, { useState, useEffect } from 'react';

function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="Home">
            <div className='Home_time'> {currentTime.toLocaleTimeString()}</div>
        </div>
    );
};
export default Home;