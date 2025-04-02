import React from 'react'
import './LessonHours.css'
import { motion } from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function LessonHours() {

  const lessonHours = [
    { name: "Math", hours: 6 },
    { name: "English", hours: 4 },
    { name: "Kiswahili", hours: 3 },
    { name: "Science", hours: 3 },
    { name: "Social Studies", hours: 3 },
    { name: "Computer", hours: 3 },
    { name: "Music", hours: 2 },
    { name: "Art & Craft", hours: 2 },
    { name: "Religious Studies", hours: 1 },
    { name: "PE", hours: 1 }
  ];
  
  const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"]

  return (
    <motion.div
      className="lesson-hours-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.3 }}
    >
      <h2 className='lesson-hours-title'> Lesson Hours</h2>
      <div className='lesson-hours-chart-container'>
        {/* ensure the chart adapts to different screen sizes */}
        <ResponsiveContainer width={"100%"} height={"100%"}> {/* Take full width and height of the parent container */}
          <PieChart>
            <Pie
              data={lessonHours} // Uses LessonHours dataset
              cx={"50%"} //centers the pie chart horizontally
              cy={"50%"} // Centers the pie chart vertically
              labelLine={false} // Hides the label line connectors
              outerRadius={80} // Sets the size of the pie chart
              fill='#8884d8' // Default fill color (overRiden by cell)
              dataKey="hours" // Uses the hours field for each pie chart slice size
              label={({ name, percent}) =>  `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {lessonHours.map((lesson, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{ 
                backgroundColor: "rgba(31, 41, 55, 0.8)", 
                border: "none" 
              }}
              itemStyle={{ color: "#E5E7EB"}}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  )
}
