import React, { useState } from 'react'
import './TimeTable.css'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function Timetable() {
    
    const timeTable_DATA = [
        { day: "Monday", periods: ["Math", "English", "Break", "Science", "Kiswahili", "Break", "Social Studies", "Computer", "Lunch", "Math", "Art & Craft", "Music"] },
        { day: "Tuesday", periods: ["Computer", "Art & Craft", "Break", "Math", "Science", "Break", "Religious Studies", "Social Studies", "Lunch", "English", "Kiswahili", "Music"] },
        { day: "Wednesday", periods: ["Math", "Kiswahili", "Break", "Science", "English", "Break", "Social Studies", "Math", "Lunch", "Computer", "Music", "Art & Craft"] },
        { day: "Thursday", periods: ["Social Studies", "Math", "Break", "Science", "Kiswahili", "Break", "English", "Computer", "Lunch", "PE", "Math", "Computer"] },
        { day: "Friday", periods: ["English", "Math", "Break", "Music", "Computer", "Break", "Science", "Math", "Lunch", "Social Studies", "Math", "English"] }
    ];

    const timeSlots = [
        "8:00 - 8:40", "8:40 - 9:20", "9:20 - 9:40", 
        "9:40 - 10:20", "10:20 - 11:00", "11:00 - 11:30", 
        "11:30 - 12:10", "12:10 - 12:50", "12:50 - 1:50", 
        "2:00 - 2:40", "2:40 - 3:20", "3:20 - 4:00"
    ];

    // State to handle the search term
    const [ searchTerm, setSearchTerm] = useState("")
    // State to handle the filtering Logic
    const [ isFiltered, setIsFiltered ] = useState(timeTable_DATA)

    const handleSearch = (e) => {
        // Handle the search term 
        const term = e.target.value.toLowerCase().trim() // convert the search value to lowercase and trim any white spaces
        // Update the search function with the latest search value the user typed in
        setSearchTerm(term)
        
        
        // if the search term is empty meaning that the search is cleared
        if (term === "") {
            setIsFiltered(timeTable_DATA) // Reset to original data when the search is cleared
            return;
        }

        // function to handle the filtering logic
        const filtered = timeTable_DATA.filter( (data) =>
            // filter according to the day
            data.day.toLowerCase().includes(term) || // Check If any of the days matches the search term
            data.periods.some((period) => period.toLowerCase().includes(term)) // Check If any of the subjects in the periods array matches the search search term
        )

        // Update the filtering function with the filtered results
        setIsFiltered(filtered)

    }

  return (
    <motion.div
        className='timetable-container'
        initial={{ opacity: 0, y: 20 }}
        animate={{  opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <div className='timetable-header'> 
            <h2 className='timetable-search-title'>Class TimeTable</h2>
            <div className='timetable-search-container'>
                <input 
                    type='text'
                    placeholder='Search Lessons'
                    className='search-input'
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <Search size={20} className='search-icon' />
            </div>
        </div>

        <div className='timetable-container'>
            <table className='timetable-content'>
                <thead>
                    <tr>
                        <th>DAY</th>
                        {timeSlots.map((slot, index) => (
                            <th key={index}>{slot}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {isFiltered.map((Item) => (
                        <motion.tr
                            key={Item.day}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <td>{Item.day}</td>
                            {Item.periods.map((subject, index) => (
                                <td key={index}>{subject}</td>
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
  )
}
