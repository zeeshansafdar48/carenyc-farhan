import { Link } from 'react-router-dom'
import arrowIcon from '@/assets/icons/arrow-up-right.svg'
import styles from './ArrowButton.module.scss'

// Black pill with a white circular arrow ("Explore more projects", "Submit").
export default function ArrowButton({ to, className = '', children, ...rest }) {
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.icon} aria-hidden="true">
        <img src={arrowIcon} alt="" width="18" height="18" />
      </span>
    </>
  )
  const classes = `${styles.button} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button type="submit" className={classes} {...rest}>
      {content}
    </button>
  )
}
