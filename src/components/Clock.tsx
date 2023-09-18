import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every minute

        // Cleanup interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0'); // Convert to 2-digit format
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Convert to 2-digit format
        return `${hours}:${minutes}`;
    };

    return (
        <div className="clock">
            {formatTime(currentTime)}
        </div>
    );
};

export default Clock;
