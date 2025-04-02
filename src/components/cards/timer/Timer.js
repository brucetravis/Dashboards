import React, { useEffect, useState } from 'react';
import './Timer.css';

export default function Timer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
    const weeks = Math.floor((difference / (1000 * 60 * 60 * 24 * 7)));
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));

    return { months, weeks, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='clock-container'>
      <div className='analog-clock'>
        <div className='clock-face'>
          <div className='hand hour' style={{ transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)` }}></div>
          <div className='hand minute' style={{ transform: `rotate(${currentTime.getMinutes() * 6}deg)` }}></div>
          <div className='hand second' style={{ transform: `rotate(${currentTime.getSeconds() * 6}deg)` }}></div>
        </div>
      </div>
      <h2 className='timer-title'>Next Exam</h2>
      <p>
        {timeLeft.months} M : {timeLeft.weeks} W : {timeLeft.days} D : {timeLeft.hours} H : {timeLeft.minutes} MIN : {timeLeft.seconds} S
      </p>
    </div>
  );
}
