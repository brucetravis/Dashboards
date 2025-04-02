import React, { useState } from 'react';

export default function StudentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Get the current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Get the first day of the current month and how many days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create an array of days to display
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Handle month change
  const handleMonthChange = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'next') {
        newDate.setMonth(newDate.getMonth() + 1);
      } else if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      }
      return newDate;
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => handleMonthChange('prev')}>Previous</button>
        <span>{`${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`}</span>
        <button onClick={() => handleMonthChange('next')}>Next</button>
      </div>

      <div className="calendar-grid">
        {/* Render the day names */}
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Render the days */}
        <div className="days">
          {/* Empty divs for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }, (_, index) => (
            <div key={index} className="empty"></div>
          ))}
          
          {days.map(day => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


