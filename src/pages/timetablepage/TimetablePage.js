import React from 'react'
import './TimetablePage.css'
import Header from '../../components/common/header/Header'
import { motion } from 'framer-motion'
import StatCard from '../../components/cards/statcard/StatCard';
import { School, Clock, CalendarCheck, CalendarDays } from 'lucide-react';
import Timetable from '../../components/tables/timetable/Timetable';
import LessonHours from '../../components/charts/lessonHours/LessonHours';
import LessonFrequency from '../../components/graphs/lessonfrequency/LessonFrequency';

export default function TimetablePage() {
  return (
    <div className='timetable-page'>
      <Header title="Student Timetable" />

      <main className='main-timetable-container'>
        {/* STATS */}
        <motion.div
          className="timetable-stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total classes per week" icon={School} value="60" color="#6366F1" /> 
          <StatCard name="Total Study Hours" icon={Clock} value="40" color="#8B5CFC" /> 
          <StatCard name="Upcoming Classes" icon={CalendarCheck} value="60" color="#EC4899" /> 
          <StatCard name="Busy Day" icon={CalendarDays} value="1" color="#10B981" /> 
        </motion.div>
      
        {/* Products Table */}
        <Timetable />

        {/* Charts */}
        <div className='timetable-grid'>
          <LessonHours />
          <LessonFrequency />
        </div>

      </main>
    </div>
  )
}
