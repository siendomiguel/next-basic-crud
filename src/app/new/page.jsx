'use client'


import FormOut from '@/components/Forms/FormOut.jsx'
import styles from './new.module.css'
import ListRegister from '@/components/Lists/ListRegister'
import { useState } from 'react'


function NewPage() {
  const [refresh, setRefresh] = useState(false)

  const handleRegisterUpdated = () => {
    setRefresh(!refresh) // Cambia el valor de refresh para forzar una actualización
  }

  return (
    <div className={styles.pageContainer}>

      <h2 className={styles.SubTitle}>Últimos registros</h2>
      <section className={styles.gridDetailsRegister}>
        <h4 className={styles.type}>Tipo</h4>
        <h4 className={styles.name}>Nombre</h4>
        <h4 className={styles.price}>Precio</h4>
        <h4 className={styles.material}>Material</h4>
        <h4 className={styles.encargado}>Encargado</h4>
        <h4 className={styles.category}>Categoria</h4>
        <h4 className={styles.paymentMethod}>Metodo de pago</h4>
        <h4 className={styles.action}>Acción</h4>
      </section>
      <ListRegister refresh={refresh} />
    </div>
  )
}

export default NewPage
