import styles from '@/components/Nav/BtnSidebarMenu.module.css'

const BtnSidebarMenu = ({ btnText }) => {
  return (
  <div className={styles.btnMenuSidebar}>
    <span className={styles.linkUrl}>{btnText}</span>
  </div>
  )
}

export default BtnSidebarMenu
