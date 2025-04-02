import React, { useState } from 'react'
import './ExamsTable.css'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function ExamsTable() {

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

    // function to calculate the percentage by the grade
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
    }

    // function to show the remarks
    const teachersRemarks = (marks) => {
        if (marks >= 85) return "Excellent";
        if (marks >= 70) return "Good";
        if (marks >= 60) return "Average";
        if (marks >= 40) return "Work Harder";
        return "Be Serious"
    }

    // Adding Grades and Percentages
    const formattedResults = examsResults.map((exam) => ({
        ...exam, // keeps all properties of the array so that we can also have Subjects, dates and marksObtained

        percentage: ((exam.marksObtained / exam.totalMarks) * 100).toFixed(2) + "%",
        grade: calculatedGrade(exam.marksObtained),
        remarks: teachersRemarks(exam.marksObtained)

    }))

    // state to handle the search term
    const [ searchTerm, setSearchTerm ] = useState("")
    // state to handle the filtering results
    const [ filteredResults, setFilteredResults ] = useState(formattedResults)
    
    // functino to handle the search logic
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase()// convert the seacrh term to lowercase
        // Update the search function with the latest search term
        setSearchTerm(term)

        // filtering function to filter through the exam subjects etc
        const filtered = formattedResults.filter(
            (exam) => 
                exam.subject.toLowerCase().includes(term) ||
                exam.marksObtained.toString().toLowerCase().includes(term) || 
                exam.date.includes(term) ||
                exam.grade.toLowerCase().includes(term) ||
                exam.remarks.toLowerCase().includes(term)
        )

        // Update the filtering function with the latest filtering result
        setFilteredResults(filtered)
    }

  return (
    <motion.div 
        className='exam-table-container'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <div className='exam-table-header'>
            <h2 className='exams-table-title'>Past Results</h2>
            <div className='exams-search-container'>
                <input
                    type='text'
                    placeholder='Search Exam'
                    onChange={handleSearch}
                    value={searchTerm}
                    className='exam-search-input'
                />
                <Search className='exams-search-icon' size={18} />
            </div>
        </div>

        <div className='exam-table-container-content'>
            <table className='exam-table'>
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Exam Date</th>
                        <th>Marks Obtained</th>
                        <th>Grade</th>
                        <th>Percentage</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredResults.map((exam) => (
                        <motion.tr
                            key={exam.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <td>{exam.subject}</td>
                            <td>{exam.date}</td>
                            <td>{exam.marksObtained}</td>
                            <td>{exam.grade}</td>
                            <td>{exam.percentage}</td>
                            <td>{exam.remarks}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>

    </motion.div>
  )
}
