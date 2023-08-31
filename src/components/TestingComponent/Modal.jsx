/* 'use client'

import styles from '../Modales/Sidebar.module.css'
const ModalNewTransaction = ({ isOpen, isClose, children }) => {
  return (
    <div className={styles.modal} style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className={styles.modalContainer}>
        <section className={styles.modalBody}>
          <div className={styles.topModal}>
            <h2 className={styles.titleModal}>Agregar venta</h2>
            <button className={styles.modalClose} onClick={isClose}>
              X
            </button>
          </div>
          <hr className={styles.hrDivisor} />
          <div className={styles.midModal}>{children}</div>
        </section>
      </div>
    </div>
  )
}

export default ModalNewTransaction
 */