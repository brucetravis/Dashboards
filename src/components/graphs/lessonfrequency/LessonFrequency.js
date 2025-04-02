import React from 'react'
import './LessonFrequency.css'
import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function LessonFrequency() {
    
    const lessonCount = [
        { name: "Math", lessons: 10 },
        { name: "Eng", lessons: 5 },
        { name: "Kis", lessons: 4 },
        { name: "Sci", lessons: 4 },
        { name: "SSt", lessons: 4 },
        { name: "Comp", lessons: 4 },
        { name: "Mus", lessons: 3 },
        { name: "A&C", lessons: 3 },
        { name: "RS", lessons: 1 },
        { name: "PE", lessons: 1 }
      ];
      
  return (
    <motion.div
        className='lesson-frequency-container'
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.4 }}
    >
        <h2 className='lesson-frequency-title'>Number of Lessons</h2>
        <div className='lesson-frequency-chart'>
            <ResponsiveContainer>
                <BarChart data={lessonCount}> {/* BarChart is the main container for the BarChart */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke='#9CA3AF' />
                    <YAxis stroke="#9CA3AF" />
                    
                    <Tooltip
                        cotentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8",borderColor: "#4B5563"}}
                        itemStyle={{ color: "#E5E7EB"}}
                    />
                    <Legend />
                    
                    <Bar dataKey="lessons" fill="#6366F1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}
