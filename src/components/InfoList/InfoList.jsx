import styles from './InfoList.module.scss'

// Stacked heading + paragraph pairs (About "Mission/Vision", Services "Foundations").
// `width` optionally fixes the paragraph width to the design's text box.
export default function InfoList({ items, className = '' }) {
  return (
    <div className={`${styles.list} ${className}`.trim()}>
      {items.map((item) => (
        <div key={item.title} className={styles.item}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text} style={item.width ? { maxWidth: item.width } : undefined}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}
