'use client'

import { useState, useEffect } from 'react'
import styles from './ListRegister.module.css'

async function loadRegister() {
  const res = await fetch(
    'https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro'
  )
  return res.json()
}

async function deleteRegister(id) {
  const res = await fetch(
    `https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro/${id}`,
    {
      method: 'DELETE'
    }
  )
  return res.json()
}

function ListRegister({ refresh }) {
  const [data, setData] = useState([])

  const fetchRegisterData = async () => {
    const registerData = await loadRegister()
    setData(registerData)
  }

  useEffect(() => {
    fetchRegisterData()
  }, [refresh])

  const handleDelete = async (id) => {
    const deletedData = await deleteRegister(id)
    console.log('Registro eliminado:', deletedData)
    fetchRegisterData() // Actualizar los registros después de eliminar
  }

  const sortedData = [...data].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
  return (
    <div>
      {sortedData.map((item) => (
        <div key={item._id} className={styles.contentRegister}>
          <p
            className={
              item.typeRegister === 'Ingreso' ? styles.isGain : styles.isOut
            }
          >
            {item.typeRegister}
          </p>
          <p>{item.name}</p>
          <p>$ {item.price}</p>
          <p>
            {item.priceMaterial === null
              ? 'No aplica'
              : '$ ' + item.priceMaterial}
          </p>
          <p>{item.madeBy}</p>
          <p>{item.category}</p>
          <p>{item.paymentMethod}</p>
          <button
            className={styles.btnDelete}
            onClick={() => handleDelete(item._id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListRegister
