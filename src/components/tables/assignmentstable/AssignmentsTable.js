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
