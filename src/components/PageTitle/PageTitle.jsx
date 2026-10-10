import styles from './PageTitle.module.scss'

export default function PageTitle({ as: Tag = 'h1', className = '', children }) {
  return <Tag className={`${styles.title} ${className}`.trim()}>{children}</Tag>
}
