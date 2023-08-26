'use client'

import { useState, useEffect } from 'react'
import styles from './ListRegister.module.css'

async function loadRegister() {
  const res = await fetch(
    'https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro'
  )
  return res.json()
}

function ListRegister() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  //  const register = await loadRegister()

  return (
    <div>
      {data.map((item) => (
        <div key={item._id} className={styles.contentRegister}>
          <h3>{item.nombreServicio}</h3>
          <p>$ {item.gastoDiarioEfectivo}</p>
          <p>{item.gastoDiarioBancolombia}</p>
          <p>{item.gastoDiarioDavivienda}</p>
        </div>
      ))}
    </div>
  )
}

export default ListRegister
