import React from 'react'
import './StatCard.css'
import { motion } from 'framer-motion'

export default function StatCard({ name, icon: Icon, value, color}) {
  return (
    <motion.div
      className='stat-card'
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3'}}
    >
      <div className='stat-card-content'>
        <span className='stat-card-title'>
          <Icon size={20} className='stat-card-icon' style={{ color }} />
          { name }
        </span>
        <p className='stat-card-value'>{ value }</p>
      </div>
    </motion.div>
  )
}
