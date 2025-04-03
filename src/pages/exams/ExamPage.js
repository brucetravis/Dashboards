import React from 'react'
import './ExamPage.css'
import { motion } from 'framer-motion'
import Header from '../../components/common/header/Header'
import StatCard from '../../components/cards/statcard/StatCard'
import { ClipboardCheck, ClipboardList, FileText, ListChecks } from 'lucide-react'
import ExamsTable from '../../components/tables/examstable/ExamsTable'
// import GradeCard from '../../components/cards/gradecard/GradeCard'
// import Timer from '../../components/cards/timer/Timer'
import ExamsGraph from '../../components/graphs/examsgraph/ExamsGraph'
import StudentCalendar from '../../components/calendar/StudentCalendar'

export default function ExamPage() {

  return (
    <div className='exams-page'>
      <Header title='Exams' />

      <main className='exams-main-container'>
        {/* STATS */}
        <motion.div
        className='exams-stats-grid'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
          <StatCard name='Upcoming Exam' icon={FileText} value='JUNE 27, 2025' color="#6366F1" />
          <StatCard name='Total exams' icon={ClipboardList} value='27' color="#8B5CFC" />
          <StatCard name='Completed Exams' icon={ClipboardCheck} value='9' color="#EC4899" />
          <StatCard name='Exams Remaining' icon={ListChecks} value='18' color="#10B981" />

        </motion.div>

        <ExamsTable />

        <div className='exams-grid'>
          <ExamsGraph />
          <StudentCalendar />
          {/* <div className='exams-grid-grade-and-timer'>
            <GradeCard />
            <Timer targetDate="2025-06-27T00:00:00" />
          </div> */}
        </div>
        
      </main>
    </div>
  )
}
