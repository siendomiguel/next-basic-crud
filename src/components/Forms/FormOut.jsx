'use client'
import styles from './FormOutStyles.module.css'

function FormOut() {
  const onSubmit = async (e) => {
    e.preventDefault()

    const nameOutput = e.target.nameOutput.value
    const priceOutput = e.target.priceOutput.value
    const aditionalOutput = e.target.aditionalOutput.value
    const paymentMethod = e.target.paymentMethod.value
    const typeOutput = e.target.selectTypeOutput.value
    const formType = 'Egreso'
    

    let priceKey = '';
    if (paymentMethod === 'Efectivo' && typeOutput === 'Gasto') {
      priceKey = 'gastoDiarioEfectivo';
    } else if (paymentMethod === 'Bancolombia' && typeOutput === 'Gasto') {
      priceKey = 'gastoDiarioBancolombia';
    } else if (paymentMethod === 'Davivienda' && typeOutput === 'Gasto') {
      priceKey = 'gastoDiarioDavivienda';
    }
  
    const requestBody = {
      nombreServicio: e.target.nameOutput.value,
      usuario: typeOutput,
      typeRegister: formType
    };
  
    if (priceKey) {
      requestBody[priceKey] = e.target.priceOutput.value;
    }
  
    console.log(requestBody);

    // Ruta web https://ohlala-server-a4bj-dev.fl0.io/
    // Ruta local http://localhost:3002/
     const res = await fetch('http://localhost:3002/api/v1/registro/', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
  }

  return (
    <div className={styles.cardFormContainer}>
      <h3>Formulario de egresos</h3>
      <form className={styles.form} onSubmit={onSubmit}>
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
        <label htmlFor="aditionalOutput" className={styles.labelForm}>
          Costo adicional del egreso
        </label>
        <input
          id="aditionalOutput"
          type="number"
          className={styles.inputForm}
          placeholder="Costo adicional (Algo que no salga en la factura) OPCIONAL"
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
        <label htmlFor="selectTypeOutput" className={styles.labelForm}>
          Selecciona el tipo de egreso
        </label>
        <select
          name="seleccionar personal"
          id="selectTypeOutput"
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
