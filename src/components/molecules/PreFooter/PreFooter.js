// import { MdAndroid } from 'react-icons/md' // Icons
import FooterMenuItem from './FooterMenuItem'
import styles from './PreFooter.module.scss'

const PreFooter = ({ menuItems }) => {
  if (!menuItems || !menuItems?.length) {
    return null
  }

  return (
    <div className={styles.preFooter}>
      <ul className={styles.footerMenu}>
        {menuItems.map((navItem, index) => (
          <FooterMenuItem item={navItem} key={index} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default PreFooter
