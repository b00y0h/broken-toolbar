import Logo from '@/components/atoms/Logo/Logo'
import FooterMenu from '@/components/molecules/Navigation/FooterMenu'
import PreFooter from '@/components/molecules/PreFooter'
import * as styles from './Footer.module.scss'
const currentYear = new Date().getFullYear()

const Footer = ({ menus }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <PreFooter
          menuItems={menus?.FOOTER_NAV}
          location="FOOTER_NAV"
          styles={styles.footerMenux}
        />
        <div className={styles.navAddrSocial}>
          <div className={styles.schoolInfo}>
            <Logo type="dark" />
            <address>
              1870 Quaker Way
              <br /> Wilmington, OH 45177
            </address>
            <ul>
              <li>
                <a href="tel:19373826661" className={styles.phoneLink}>
                  <span>937-382-6661</span>
                </a>
              </li>
              <li>
                <a href="tel:18003419318" className={styles.phoneLink}>
                  <span>1-800-341-9318</span>
                </a>
              </li>
            </ul>
          </div>
          <FooterMenu menuItems={menus?.RESOURCE_NAV} menuTitle="Resources" />
          <div className={styles.socialFooter}>
            <h3>Connect</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/WilmingtonCollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/WilmingtonColl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wilmingtoncollege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@wilmingtoncollege1870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className="sr-only">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <small>
            Wilmington College does not discriminate on the basis of age, race,
            color, religion, national or ethnic origin, sexual orientation or
            disability in the administration of educational policies, admission
            policies, financial aid, employment or any other College program or
            activity.{' '}
            <a
              href="https://www.wilmington.edu/about/disclosures/"
              target="_blank"
            >
              Disclosures
            </a>{' '}
            <span className={styles.copyright}>
              ©{currentYear} Wilmington College. All rights reserved
            </span>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
