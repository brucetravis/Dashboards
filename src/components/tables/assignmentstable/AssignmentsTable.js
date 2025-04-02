import React, { useState } from 'react'
import './AssignmentsTable.css'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react';

export default function AssignmentsTable() {
  
  const assignmentsList = [
    { id: 1, subject: "Math", title: "Algebra Practice", dueDate: "2024-04-01", status: "Pending", score: "-" },
    { id: 2, subject: "English", title: "Essay on Wildlife", dueDate: "2024-04-03", status: "Submitted", score: "-" },
    { id: 3, subject: "Science", title: "Lab Report on Plants", dueDate: "2024-04-05", status: "Graded", score: "85%" },
    { id: 4, subject: "Kiswahili", title: "Muhtasari wa Hadithi", dueDate: "2024-04-07", status: "Pending", score: "-" },
    { id: 5, subject: "Religious Studies", title: "Bible Story Summary", dueDate: "2024-04-09", status: "Submitted", score: "-" },
    { id: 6, subject: "Social Studies", title: "Map of Kenya Project", dueDate: "2024-04-11", status: "Graded", score: "90%" },
    { id: 7, subject: "Computer", title: "Basic HTML Coding", dueDate: "2024-04-13", status: "Pending", score: "-" },
    { id: 8, subject: "Art & Craft", title: "Draw a Landscape", dueDate: "2024-04-15", status: "Submitted", score: "-" },
    { id: 9, subject: "Music", title: "Write a Song Verse", dueDate: "2024-04-17", status: "Graded", score: "88%" }
  ];
  
  // State to handle the connection buttons
  const [ handledAssignments, setHandledAssignments ] = useState([
    {
      id: 1,
      submitted: true,
      downloaded: true,
      completed: true
    },
  ]);
  
  // State to handle the search
  const [ searchTerm, setSearchTerm ] = useState("")
  // state to handle the filtering Logic
  const [ isFiltered, setFiltered ] = useState(assignmentsList) 


  // functio to handle the search logic
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    // function to update the search term to the latest search
    setSearchTerm(term)
    

    // function to handle the filterinig logic
    const filtered = assignmentsList.filter(
      (assignment) => 
        assignment.subject.toLowerCase().includes(term) || 
        assignment.title.toLowerCase().includes(term) ||
        assignment.dueDate.includes(term) ||
        assignment.status.toLowerCase().includes(term) ||
        assignment.score.includes(term)
    )

    // Update the function to the latest filtered terms
    setFiltered(filtered)
  }
  
  return (
    <motion.div
      className='assignments-table-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className='assignments-table-header'>
        <h2 className='assignments-table-title'>Class Assignments</h2>
        <div className='assignments-search-container'>
          <input 
            type='text'
            placeholder='Search Assignmnets'
            onChange={handleSearch}
            value={searchTerm}
            className='assignments-search-input'
          />

          <Search size={20} className='assignments-search-icon' /> 
        </div>
      </div>

      <div className='assignments-table-container-content'>
        <table className='assignments-table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Subject</th>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {isFiltered.map((assignment) => (
              <motion.tr
                key={assignment.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td>{assignment.id}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.title}</td>
                <td>{assignment.dueDate}</td>
                <td>
                  <span className={`status-badge ${assignment.status.toLowerCase()}`}>{assignment.status}</span>
                </td>
                <td>{assignment.score}</td>
                <td className='assignments-actions'>

                {handledAssignments.map((assignment) => (
                  <div key={assignment.id} className='actions-row'>
                    <button 
                      className={`assignment-btn ${assignment.submitted ? "submitted" : "submit"}`}
                      onClick={() => {
                        setHandledAssignments(
                          handledAssignments.map((ass) => {
                            if (ass.id === assignment.id) {
                              return { ...ass, submitted: !assignment.submitted}
                            }

                            return ass
                          })
                        )
                      }}
                    >
                      {assignment.submitted ? "submitted" : "submit"}
                    </button>

                    <button
                      className={`download-btn ${assignment.downloaded ? "downloaded" : "download"}`}
                      onClick={() => {
                        setHandledAssignments(
                          handledAssignments.map((ass) => {
                            if (ass.id === assignment.id) {
                              return { ...ass, downloaded: !assignment.downloaded}
                            }
                            
                            return ass
                          })
                        )
                      }}
                    >
                      {assignment.downloaded ? "downloaded" : "download"}
                    </button>

                    <button
                      className={`completed-btn ${assignment.completed ? "completed" : "complete"}`}
                      onClick={() => {
                        setHandledAssignments(
                          handledAssignments.map((ass) => {
                            if (ass.id === assignment.id) {
                              return { ...ass, completed: !assignment.completed }
                            }
                            
                            return ass
                          })
                        )
                      }}
                    >
                      {assignment.completed ? "completed" : "complete"}
                    </button>
                  </div>
                ))}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>


    </motion.div>
  )
}
