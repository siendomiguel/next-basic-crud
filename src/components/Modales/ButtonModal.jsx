'use client'

import { useState } from 'react'
import styles from '@/components/Modales/ButtonModal.module.css'
import Sidebar from '@/components/Modales/Modal'

const ButtonModal = ({ textBtn, bgColor, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <div className={styles.containerBtnModal}>
      <button
        className={styles.openSidebarButton}
        style={{ backgroundColor: bgColor }}
        onClick={handleSidebarToggle}
      >
        {textBtn}
      </button>
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose}>
        {children}
      </Sidebar>
    </div>
  )
}

export default ButtonModal
