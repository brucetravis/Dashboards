import React from 'react'
import './Assignments.css'
import { motion } from 'framer-motion'
import Header from '../../components/common/header/Header'
import AssignmentsTable from '../../components/tables/assignmentstable/AssignmentsTable'
import { AlertTriangle, ClipboardCheck, ClipboardList, Clock } from 'lucide-react'
import StatCard from '../../components/cards/statcard/StatCard'

export default function Assignments() {
  return (
    <div className='assignments-page'>
      <Header title='Assignments' />

      <main className='main-assignments-container'>
        <motion.div
          className='assignments-stats-grid'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Assignments" icon={ClipboardList} value="15" color="#6366F1" />
          <StatCard name="Pending Assignments" icon={Clock} value="5" color="#F59E0B" />
          <StatCard name="Completed Assignments" icon={ClipboardCheck} value="10" color="#10B981" />
          <StatCard name="Overdue Assignments" icon={AlertTriangle} value="0" color="#EF4444" />
        </motion.div>

        {/* AAssignments Table */}
        <AssignmentsTable />
        
      </main>
    </div>
  )
}
