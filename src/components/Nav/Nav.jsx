import Link from 'next/link'
import styles from './NavStyles.module.css'
import ButtonModal from '@/components/Modales/ButtonModal'
import FormGain from '@/components/Forms/FormGain.jsx'
import FormOut from '@/components/Forms/FormOut.jsx'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Total del día: --|--</li>
        <li>Egresos del día: --|--</li>
        <li>Fecha: --|--|--</li>
      </ul>
      <section className={styles.sectionNavMenu}>
        <ButtonModal textBtn="Registrar venta" bgColor="rgb(27, 180, 103)">
          <FormGain />
        </ButtonModal>
        <ButtonModal textBtn="Registrar gasto" bgColor="rgb(170, 66, 66)">
          <FormOut />
        </ButtonModal>
      </section>
    </nav>
  )
}

export default NavBar
