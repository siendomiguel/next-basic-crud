'use client'
import { useState } from 'react'
import styles from './FormOutStyles.module.css'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

function FormOut({ onRegisterUpdated }) {
  const [isFetching, setIsFetching] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    const requestBody = {
      name: e.target.nameOutput.value,
      price: e.target.priceOutput.value,
      paymentMethod: e.target.paymentMethod.value,
      madeBy: e.target.selectPersonal.value,
      typeRegister: 'Egreso',
      category: e.target.selectCategoryOutput.value
    }

    setIsFetching(true)

    try {
      const res = await fetch('http://localhost:3002/api/v1/registro', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        const data = await res.json()
        console.log(data)
        console.log(res)

        // Llama a la función onRegisterUpdated para actualizar los registros en ListRegister
        if (typeof onRegisterUpdated === 'function') {
          onRegisterUpdated()
        }
      } else {
        console.error('Error al enviar el formulario:', res.statusText)
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <div className={styles.cardFormContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.titleForm}>
          <FaMoneyBillTransfer className={styles.iconTitleForm} />
          <h3>Registrar gasto</h3>
        </div>
        <label htmlFor="nameOutput" className={styles.labelForm}>
          Nombre del egreso
        </label>
        <input
          id="nameOutput"
          type="text"
          className={styles.inputForm}
          placeholder="Nombre del egreso"
        />
        <label htmlFor="priceOutput" className={styles.labelForm}>
          Costo del egreso
        </label>
        <input
          id="priceOutput"
          type="number"
          className={styles.inputForm}
          placeholder="Costo del egreso total"
        ></input>
        <label htmlFor="paymentMethod" className={styles.labelForm}>
          Selecciona el metodo de pago
        </label>
        <select
          name="seleccionar metodo de pago"
          id="paymentMethod"
          className={styles.selectPaid}
        >
          <option value="Efectivo">Efectivo</option>
          <option value="Bancolombia">Bancolombia</option>
          <option value="Davivienda">Davivienda</option>
        </select>
        <label htmlFor="selectPersonal" className={styles.labelForm}>
          Selecciona el encargado o personal responsable del gasto
        </label>
        <select
          name="seleccionar personal"
          id="selectPersonal"
          className={styles.selectPersonal}
        >
          <option value="Local">Local</option>
          <option value="Maritza Avila">Maritza Avila</option>
          <option value="Laurimar">Laurimar</option>
          <option value="Del valle">Del Valle</option>
          <option value="Genesis Paola">Genesis Paola</option>
        </select>
        <label htmlFor="selectCategoryOutput" className={styles.labelForm}>
          Selecciona el tipo de egreso
        </label>
        <select
          name="seleccionar personal"
          id="selectCategoryOutput"
          className={styles.selectPersonal}
        >
          <option value="Gasto">Gasto</option>
          <option value="Vale">Vale</option>
          <option value="Material">Material</option>
          <option value="Otro">Otro</option>
        </select>
        <button className={styles.btnForm}>Crear registro</button>
      </form>
    </div>
  )
}

export default FormOut
