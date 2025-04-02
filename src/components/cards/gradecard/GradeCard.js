import React from 'react'
import './GradeCard.css'
import { motion } from 'framer-motion'

export default function GradeCard() {

    const examsResults = [
        { id: 1, subject: "Math", date: "2024-03-10", marksObtained: 78, totalMarks: 100 },
        { id: 2, subject: "English", date: "2024-03-12", marksObtained: 85, totalMarks: 100 },
        { id: 3, subject: "Science", date: "2024-03-15", marksObtained: 72, totalMarks: 100 },
        { id: 4, subject: "Kiswahili", date: "2024-03-18", marksObtained: 88, totalMarks: 100 },
        { id: 5, subject: "Religious Studies", date: "2024-03-20", marksObtained: 91, totalMarks: 100 },
        { id: 6, subject: "Social Studies", date: "2024-03-22", marksObtained: 67, totalMarks: 100 },
        { id: 7, subject: "Computer", date: "2024-03-25", marksObtained: 95, totalMarks: 100 },
        { id: 8, subject: "Art & Craft", date: "2024-03-27", marksObtained: 80, totalMarks: 100 },
        { id: 9, subject: "Music", date: "2024-03-30", marksObtained: 74, totalMarks: 100 }
    ]


    // Function to calculate the grade based on percentage
    const calculatedGrade = (marks) => {
        if (marks >= 95) return "A+";
        if (marks >= 90) return "A";
        if (marks >= 85) return "A-";
        if (marks >= 80) return "B+";
        if (marks >= 75) return "B";
        if (marks >= 70) return "B-";
        if (marks >= 65) return "C+";
        if (marks >= 60) return "C-";
        if (marks >= 55) return "D+";
        if (marks >= 45) return "D";
        if (marks >= 40) return "D-";
        return "E";
    };

    const calculateGeneralGrade = () => {
        const totalMarksObtained = examsResults.reduce((sum, exams) => sum + exams.marksObtained, 0);
        const totalPossibleMarks = examsResults.reduce((sum, exams) => sum + exams.totalMarks, 0);
        const averagePercentage = (totalMarksObtained / totalPossibleMarks) * 100

        return calculatedGrade(averagePercentage)
    }

    const gradeColor = (grade) => {
      if (grade.startsWith('A')) return '#10B981'; // Green
      if (grade.startsWith('B')) return '#10B981'; // Green
      if (grade.startsWith('C')) return '#FACC15'; // Yellow
      if (grade.startsWith('D')) return '#FB923C'; // Orange
      return '#EF4444'; // Red for E and below
    };

    // store the final grade
    const finalGrade = calculateGeneralGrade()
  

  return (
    <motion.div
      className='grade-card'
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}
    >
      <div className='grade-card-content'>
        <span className='grade-card-title'>
          FINAL GRADE
        </span>
        <p className='grade-card-value' style={{ color: gradeColor(finalGrade)}}>
          { calculateGeneralGrade() }
        </p>
      </div>
    </motion.div>
  )
}
