import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '@/components/Container/Container'
import logo from '@/assets/icons/logo.svg'
import { mainNav } from '@/data/navigation'
import styles from './Header.module.scss'

// The design marks "Work" as the current section on the home page too.
const HOME_ACTIVE_PATH = '/work'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="BBA – Business Branding Advertisement, home">
          <img src={logo} alt="" width="120" height="28" />
        </Link>
        <nav aria-label="Main">
          <ul className={styles.nav}>
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => {
                    const active = isActive || (pathname === '/' && item.to === HOME_ACTIVE_PATH)
                    return `${styles.link} ${active ? styles.active : ''}`.trim()
                  }}
                >
                  <span className={styles.label}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
