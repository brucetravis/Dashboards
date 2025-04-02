import React, { useState } from 'react'
import './SideBar.css'
import { BarChart2, ClipboardCheck, FileText, Home, List, Megaphone, Menu, Settings } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
// Anything imported from react router dom is not exported as default, so curly braces are a MUST
import { Link } from 'react-router-dom'

export default function SideBar() {

  const sideBarItems = [
    { name: "Home", icon: Home, color: "#6366f1", href: '/' },
    { name: "Timetable", icon: List, color: '#8B5CFC', href: '/timetablepage'  },
    { name: "Attendance", icon: BarChart2, color: "#EC4899", href: "/attendance" },
    { name: "Exams", icon: ClipboardCheck, color: "#10B981", href: "/exams" },
    { name: "Assignments", icon: FileText, color: "#F59E0B", href: "/assignments" },
    { name: "Announcements", icon: Megaphone, color: "#3B82F6", href: "/announcements" }
  ]

  // state to open and close the sidebar
  const [ isSideBarOpen, setIsSideBarOpen ] = useState(false) // initial state is false
  
  
  return (
    // motion.div provides animation effects for opening and closing the sidebar
    <motion.div
      // class Name controls styles for opening and closing sidebar states
      className={`sidebar-container ${isSideBarOpen ? "sidebar-open" : "sidebar-closed"}`}
      // animate controls the width of the sidebar when open and closed
      animate={{ width: isSideBarOpen ? 256 : 80 }}
    >
      <div className='sidebar-inner'>
        <motion.button
          whileHover={{ scale: 1.1 }} /* Increases the size by 10% when hovered */
          whileTap={{ scale: 0.9 }} /* Shrinks the size by 10% when clicked */
          onClick={() => setIsSideBarOpen(!isSideBarOpen)} /* Toggles the sidebar between open and closed */
          className='sidebar-button' /* sidebar styling button */
        >
          <Menu size={24} className='menu-icon'/> {/* Hamburger button from lucide-react styled 24pixels large */}
        </motion.button>
        {/* You can map through the sidebar Item shere to render the menu Items */}
        <nav className='sidebar-nav'>
          {sideBarItems.map((item, index) => (
            // Link to each Items link
            <Link to={item.href} key={index}>
              <motion.div className='sidebar-nav-item'>
                <item.icon size={24} color={item.color} style={{ color: item.color, minWidth: "20px" }} /> {/* Set each menu Icon to have a consistent width and approopriate color */}
              
                <AnimatePresence> {/* Ensures smooth entry/exit animations */}
                  {isSideBarOpen && (
                    <motion.span 
                      className='animated-span'
                      initial={{ opacity: 0, width: 0}} /* Starts hidden (opacity: 0) */
                      animate={{ opacity: 1, width: "auto" }} /* becomes visible when he sidebar opens */
                      exit={{ opacity: 0, width: 0 }} /* disappears when the sidebbar closes */
                      transition={{ duration: 0.2, delay: 0.3 }}
                    > {/* motion span is the text that appears and disappears when toggling the sidebar */}
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

    </motion.div>
  )
}
