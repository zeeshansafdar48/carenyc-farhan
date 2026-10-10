import Media from '@/components/Media/Media'
import styles from './ProjectCard.module.scss'

// Card frame size in the design; overlay positions are stored in these units
// and converted to percentages so they scale with the card.
const CARD_WIDTH = 830
const CARD_HEIGHT = 580

const toPercent = (value, total) => `${(value / total) * 100}%`

export default function ProjectCard({ card, className = '' }) {
  const { name, category, background, media, overlay, icon } = card

  return (
    <div className={`${styles.card} ${className}`.trim()} style={{ backgroundColor: background }}>
      <Media media={media} className={styles.media} />

      {overlay && (
        <img
          className={styles.overlay}
          src={overlay.src}
          alt=""
          style={{
            left: toPercent(overlay.left, CARD_WIDTH),
            top: toPercent(overlay.top, CARD_HEIGHT),
            width: toPercent(overlay.width, CARD_WIDTH),
          }}
        />
      )}

      <div className={styles.badge}>
        <span className={styles.icon} style={{ backgroundColor: icon.background }}>
          <img
            src={icon.src}
            alt=""
            className={icon.cover ? styles.iconCover : styles.iconGlyph}
            style={icon.cover ? undefined : { width: icon.width, height: icon.height, left: icon.left, top: icon.top }}
          />
        </span>
        <span className={styles.badgeText}>
          <span className={styles.name}>{name}</span>
          <span className={styles.category}>{category}</span>
        </span>
      </div>
    </div>
  )
}
