'use client'

const ListTesting = () => {
  
  const clicAction = () => {
    console.log('click')
  }

  return (
    <div>
      <button onClick={clicAction}>Clic</button>
    </div>
  )
}

export default ListTesting
