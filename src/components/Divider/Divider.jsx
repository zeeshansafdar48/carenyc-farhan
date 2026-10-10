import styles from './Divider.module.scss'

export default function Divider({ className = '' }) {
  return <hr className={`${styles.divider} ${className}`.trim()} />
}
