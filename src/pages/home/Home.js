import React from 'react'
import './Home.css'
import Header from '../../components/common/header/Header';
import { motion } from 'framer-motion';
import StatCard from '../../components/cards/statcard/StatCard';
import { CheckCircle2, Clock, FileText } from 'lucide-react';
import GradeCard from '../../components/cards/gradecard/GradeCard';
import Timetable from '../../components/tables/timetable/Timetable';
import ExamsGraph from '../../components/graphs/examsgraph/ExamsGraph';
import LessonHours from '../../components/charts/lessonHours/LessonHours';
import AssignmentsTable from '../../components/tables/assignmentstable/AssignmentsTable';
import AttendanceGraph from '../../components/graphs/attendancegraph/AttendanceGraph';
import StudentCalendar from '../../components/calendar/StudentCalendar'

export default function Home() {
  
  return (
    <div className='home-page'>
      <Header title='Student DashBoard' />

      <main className='main-home-container'>
        {/* STATS */}
        <motion.div
          className='home-stats-grid'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total classes Attended" icon={CheckCircle2} value="5/60" color="#6366F1" />
          <StatCard name="Pending Assignments" icon={Clock} value="5" color="#F59E0B" />
          <StatCard name='Upcoming Exam' icon={FileText} value='JUNE 27, 2025' color="#6366F1" />
          <GradeCard />

        </motion.div>

        {/* Charts */}
        <div className='home-charts-grid'>
          <AttendanceGraph />
          <StudentCalendar />
        </div>
        
        <Timetable />
        
        <div className='home-charts-grid'>
          <ExamsGraph />
          <LessonHours />
        </div>
        
        <AssignmentsTable />

      </main>
      
    </div>
  )
}
