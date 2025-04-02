import React from 'react'
import './ExamsGraph.css'
import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function ExamsGraph() {

  const examPerformanceData = [
    { name: "Semester 1", averageMarks: 75 },
    { name: "Semester 2", averageMarks: 82 },
    { name: "Semester 3", averageMarks: 68 },
    { name: "Semester 4", averageMarks: 90 },
    { name: "Semester 5", averageMarks: 85 }
  ];

  
  return (
    <motion.div
      className='exams-graph-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3}}
    >
      <h2 className='exams-graph-title'>Performance Trend</h2>
      <div className='exams-graph-chart'>
        <ResponsiveContainer>
          <BarChart data={ examPerformanceData }>
            <CartesianGrid strokeDasharray= "3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "rgba(31, 41, 55, 0.8)", 
                borderColor: "#4B5563" 
              }}
              itemStyle={{ color: "#E5E7EB"}}
            />
            <Legend />
            <Bar dataKey='averageMarks' fill="#10B981" name="Average Marks" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
