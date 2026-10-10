import styles from './Media.module.scss'

// Renders an image or a looping background video. Projects currently use mock
// images; swap `media` in src/data/projects.js to { type: 'video', src, poster }.
export default function Media({ media, className = '' }) {
  if (!media?.src) return null

  const classes = `${styles.media} ${className}`.trim()

  if (media.type === 'video') {
    return (
      <video
        className={classes}
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={media.alt}
      />
    )
  }

  return <img className={classes} src={media.src} alt={media.alt ?? ''} loading="lazy" decoding="async" />
}
