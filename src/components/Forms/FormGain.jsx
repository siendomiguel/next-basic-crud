'use client'
import { useState } from 'react'
import styles from './FormGainStyles.module.css'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

function FormGain({ onRegisterUpdated }) {
  const [isFetching, setIsFetching] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    const requestBody = {
      name: e.target.nameServices.value,
      value: e.target.priceServices.value,
      priceMaterial: e.target.priceMaterial.value,
      paymentMethod: e.target.selectPaid.value,
      madeBy: e.target.selectPersonal.value,
      typeRegister: 'Ingreso',
      category: 'Servicio'
    }

    setIsFetching(true)

    try {
      const res = await fetch(
        'https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro',
        {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

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
          <h3>Registrar venta</h3>
        </div>
        <label htmlFor="nameServices" className={styles.labelForm}>
          Nombre del servicio
        </label>
        <input
          id="nameServices"
          type="text"
          className={styles.inputForm}
          placeholder="Nombre del servicio"
        />
        <label htmlFor="priceServices" className={styles.labelForm}>
          Precio del servicio
        </label>
        <input
          id="priceServices"
          type="number"
          className={styles.inputForm}
          placeholder="Precio del servicio"
        ></input>
        <label htmlFor="priceMaterial" className={styles.labelForm}>
          Precio del material
        </label>
        <input
          id="priceMaterial"
          type="number"
          className={styles.inputForm}
          placeholder="Precio material"
        ></input>
        <label htmlFor="selectPaid" className={styles.labelForm}>
          Selecciona el metodo de pago
        </label>
        <select
          name="seleccionar metodo de pago"
          id="selectPaid"
          className={styles.selectPaid}
        >
          <option value="Efectivo">Efectivo</option>
          <option value="Bancolombia">Bancolombia</option>
          <option value="Davivienda">Davivienda</option>
        </select>
        <label htmlFor="selectPersonal" className={styles.labelForm}>
          Selecciona el personal
        </label>
        <select
          name="seleccionar personal"
          id="selectPersonal"
          className={styles.selectPersonal}
        >
          <option value="Maritza Avila">Maritza Avila</option>
          <option value="Laurimar">Laurimar</option>
          <option value="Del valle">Del Valle</option>
          <option value="Genesis Paola">Genesis Paola</option>
        </select>
        <button className={styles.btnForm}>Crear registro</button>
      </form>
    </div>
  )
}

export default FormGain
