import styles from '@/components/Nav/SidebarMenu.module.css'
import BtnSidebarMenu from '@/components/Nav/BtnSidebarMenu'
import Link from 'next/link'

const SidebarMenu = () => {
  return (
    <div className={styles.containerSidebarMenu}>
      <section className={styles.sectionSidebarMenu}>
        <h1>App de registros</h1>
        <hr className={styles.hrSeparator} />
        <Link href="/">
          <BtnSidebarMenu btnText="Home" />
        </Link>
        <Link href="/about">
          <BtnSidebarMenu btnText="Conocenos" btnLink="/about" />
        </Link>
        <Link href="/new">
          <BtnSidebarMenu btnText="Movimientos" btnLink="/new" />
        </Link>
      </section>
    </div>
  )
}

export default SidebarMenu
