import React from 'react'
import './AttendanceGraph.css'
import { motion } from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function AttendanceGraph() {

  const attendanceData = [
    { week: "Week 1", attendance: 90 }, // Week 1, 90% attendance
    { week: "Week 2", attendance: 85 }, // Week 2, 85% attendance
    { week: "Week 3", attendance: 100 }, // Week 3, 100% attendance
    { week: "Week 4", attendance: 80 }, // Week 4, 80% attendance
    { week: "Week 5", attendance: 92 }, // Week 5, 92% attendance
    { week: "Week 6", attendance: 20 }, // Week 6, 20% attendance
    { week: "Week 7", attendance: 93 }, // Week 7, 93% attendance
    { week: "Week 8", attendance: 60 },  // Week 8, 60% attendance
    { week: "Week 9", attendance: 85 },  // Week 9, 85% attendance
    { week: "Week 10", attendance: 76 }  // Week 10, 85% attendance
  ];

  return (
    <motion.div
      className='attendance-graph-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='attendance-graph-title'>Student Attendance Graph</h2>
    
      <div className='student-attendance-graph'>
        <ResponsiveContainer>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="week" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
              <Line 
                type='monotone'
                dataKey="attendance"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 8 }}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
