/* 'use client'

import { useState } from 'react'

import ModalNewTransaction from './Modal'
import styles from './Modal.module.css'

const Modales = () => {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className={styles.containerFatherModal}>
      <button onClick={() => setMostrar(true)}>Agregar una venta</button>
      <ModalNewTransaction isOpen={mostrar} isClose={() => setMostrar(false)}>
        <h1>Prueba desde children</h1>
      </ModalNewTransaction>
    </div>
  )
}

export default Modales
 */