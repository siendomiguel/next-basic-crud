import FormGain from '@/components/Forms/FormGain.jsx'
import FormOut from '@/components/Forms/FormOut.jsx'
import styles from './new.module.css'

function NewPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.Title}>Formulario de tareas</h1>
      <div className={styles.gridContainerForms}>
        <FormGain />
        <FormOut />
      </div>
      <h2 className={styles.SubTitle}>Últimos registros</h2>
    </div>
  )
}

export default NewPage
