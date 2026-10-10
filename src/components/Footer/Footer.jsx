import { Link } from 'react-router-dom'
import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import { contactInfo, footerNav, socialLinks } from '@/data/navigation'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <h2 className={styles.heading}>Your strategic design partner for business</h2>
        <Divider />

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>BBA</h3>
            <ul className={styles.list}>
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Social</h3>
            <ul className={`${styles.list} ${styles.socialList}`}>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.link} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <address className={styles.list}>
              <a href={`tel:${contactInfo.phone.replaceAll('-', '')}`}>{contactInfo.phone}</a>
              <br />
              {contactInfo.location}
            </address>
          </div>
        </div>

        <p className={styles.copyright}>© BBA All Rights Reserved.</p>
      </Container>
    </footer>
  )
}
