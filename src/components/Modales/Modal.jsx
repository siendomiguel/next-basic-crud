import styles from './Sidebar.module.css'
import { RiCloseCircleLine } from 'react-icons/ri'
const Sidebar = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <RiCloseCircleLine className={styles.closeButton} onClick={onClose} />
      {children}
    </div>
  )
}

export default Sidebar
