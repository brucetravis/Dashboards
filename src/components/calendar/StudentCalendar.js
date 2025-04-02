import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './StudentCalendar.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleMonthChange = (offset) => {
    const newDate = new Date(year, month + offset, 1);
    setCurrentDate(newDate);
    setSelectedDate(newDate.getMonth() === new Date().getMonth() ? new Date().getDate() : null);
  };

  return (
    <motion.div
      className='calendar-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='calendar-title'>Student Calendar</h2>
      <div className='calendar-header'>
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>
        <h2 className='calendar-month'>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>
      </div>
      <div className='calendar-grid'>
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          return (
            <motion.div
              key={day}
              className={`calendar-day ${day === selectedDate ? 'selected' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedDate(day)}
            >
              {day}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};