import React from 'react'
import './Attendace.css'
import { motion } from 'framer-motion'
import Header from '../../components/common/header/Header'
import StatCard from '../../components/cards/statcard/StatCard'
import { BarChart2, CheckCircle2, Target, XCircle } from 'lucide-react'
import AttendanceGraph from '../../components/graphs/attendancegraph/AttendanceGraph'

export default function Attendance() {
  return (
    <div className='attendance-page'>
      <Header title='Class Attendance'/>

      <main className='attendace-main-container'>
        <motion.div
          className="attendance-stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <StatCard name="Total classes Attended" icon={CheckCircle2} value="5/60" color="#6366F1" />
          <StatCard name="Total Attendance Percentage" icon={BarChart2} value="2%" color="#8B5CFC" />
          <StatCard name="Classes Missed" icon={XCircle} value="1" color="#EC4899" />
          <StatCard name="Attendance Goal" icon={Target} value="100%" color="#10B981" />
        </motion.div>

        <div className='attendance-grid'>
          <AttendanceGraph />
        </div>
      </main>
    </div>
  )
}
