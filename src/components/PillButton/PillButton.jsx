import { Link } from 'react-router-dom'
import styles from './PillButton.module.scss'

// Rounded text button ("Learn more about us", "More").
export default function PillButton({ to, href, variant = 'dark', className = '', children, ...rest }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
