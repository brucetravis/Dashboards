# CODE WITH ERROR
The bug here is, when I click one submitted, downloaded or completed button, they all react yet It shouldn't be that way

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
                  <span className={status-badge ${assignment.status.toLowerCase()}}>{assignment.status}</span>
                </td>
                <td>{assignment.score}</td>
                <td className='assignments-actions'>

                {handledAssignments.map((assignment) => (
                  <div key={assignment.id} className='actions-row'>
                    <button 
                      className={assignment-btn ${assignment.submitted ? "submitted" : "submit"}}
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
                      className={download-btn ${assignment.downloaded ? "downloaded" : "download"}}
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
                      className={completed-btn ${assignment.completed ? "completed" : "complete"}}
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



<!-- The issue is that every assignment row is mapping over the same handledAssignments state, meaning every row gets the same set of buttons. This is why clicking one button affects all of them.

How to Fix It
Each assignment should have its own independent state for the "submitted," "downloaded," and "completed" buttons.

✅ Steps to Fix:
Initialize handledAssignments with a unique state for each assignment

Update the state using assignment.id to change only the clicked assignment's status -->




# FIXED CODE
import React, { useState } from "react";
import "./AssignmentsTable.css";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

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

  // Initialize handledAssignments state per assignment
  const [handledAssignments, setHandledAssignments] = useState(
    assignmentsList.reduce((acc, assignment) => {
      acc[assignment.id] = { submitted: false, downloaded: false, completed: false };
      return acc;
    }, {})
  );

  // Function to toggle button states
  const toggleAssignmentStatus = (id, type) => {
    setHandledAssignments((prev) => ({
      ...prev,
      [id]: { ...prev[id], [type]: !prev[id][type] }
    }));
  };

  // State to handle the search
  const [searchTerm, setSearchTerm] = useState("");
  // State to handle the filtering logic
  const [isFiltered, setFiltered] = useState(assignmentsList);

  // Function to handle the search logic
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = assignmentsList.filter(
      (assignment) =>
        assignment.subject.toLowerCase().includes(term) ||
        assignment.title.toLowerCase().includes(term) ||
        assignment.dueDate.includes(term) ||
        assignment.status.toLowerCase().includes(term) ||
        assignment.score.includes(term)
    );

    setFiltered(filtered);
  };

  return (
    <motion.div
      className="assignments-table-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="assignments-table-header">
        <h2 className="assignments-table-title">Class Assignments</h2>
        <div className="assignments-search-container">
          <input
            type="text"
            placeholder="Search Assignments"
            onChange={handleSearch}
            value={searchTerm}
            className="assignments-search-input"
          />
          <Search size={20} className="assignments-search-icon" />
        </div>
      </div>

      <div className="assignments-table-container-content">
        <table className="assignments-table">
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
                  <span className={`status-badge ${assignment.status.toLowerCase()}`}>
                    {assignment.status}
                  </span>
                </td>
                <td>{assignment.score}</td>
                <td className="assignments-actions">
                  <div className="actions-row">
                    <button
                      className={`assignment-btn ${
                        handledAssignments[assignment.id]?.submitted ? "submitted" : "submit"
                      }`}
                      onClick={() => toggleAssignmentStatus(assignment.id, "submitted")}
                    >
                      {handledAssignments[assignment.id]?.submitted ? "Submitted" : "Submit"}
                    </button>

                    <button
                      className={`download-btn ${
                        handledAssignments[assignment.id]?.downloaded ? "downloaded" : "download"
                      }`}
                      onClick={() => toggleAssignmentStatus(assignment.id, "downloaded")}
                    >
                      {handledAssignments[assignment.id]?.downloaded ? "Downloaded" : "Download"}
                    </button>

                    <button
                      className={`completed-btn ${
                        handledAssignments[assignment.id]?.completed ? "completed" : "complete"
                      }`}
                      onClick={() => toggleAssignmentStatus(assignment.id, "completed")}
                    >
                      {handledAssignments[assignment.id]?.completed ? "Completed" : "Complete"}
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

🔑 What’s Fixed?
✅ Each assignment now has its own unique state
✅ Clicking a button only updates that assignment’s state
✅ No more affecting all buttons at once 🎯

Now, each button works independently per row! 🚀








<!-- You said:
Aaah fixed, thanks .Although I didn't quite understand where the problem was


ChatGPT said:
Glad you fixed it! 🎉 The issue was with how you were mapping over handledAssignments inside the td for each row.

The Problem:
You were mapping over handledAssignments for every assignment row.

This means that for every assignment in isFiltered, all buttons were being repeated based on the structure of handledAssignments.

That’s why clicking one button affected all buttons—it wasn't tied to the correct assignment.

The handledAssignments state was a static array with only one object (id: 1).

Since you weren’t properly associating actions with the correct assignment, every button change affected the whole component.

The Fix:
You need to associate each assignment’s button state properly using the id from isFiltered (or assignmentsList).

Instead of looping over handledAssignments, ensure each assignment row gets its own state reference.

If you still need help understanding what went wrong, I can break it down further! 🚀







You said:
Make it easier for a person who does  not know coding


ChatGPT said:
Alright! Imagine you have a list of assignments, and each assignment has three buttons: Submit, Download, and Complete.

Now, let's say you want to click the "Submit" button for only one assignment. But instead, all the "Submit" buttons for all assignments change at the same time. That's the problem you were facing.

Why Did That Happen?
You had a separate list of button states, but it wasn’t correctly linked to each assignment. So, when you clicked a button, the system thought you were changing the button for every assignment instead of just one.

The Fix
You made sure that each button is correctly tied to its specific assignment. Now, when you click "Submit" for Assignment 3, only that assignment's button changes, and the others stay the same.

It's like labeling each button with the right assignment so they don't all react at once! 🚀 -->








