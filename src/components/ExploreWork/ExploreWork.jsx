import ArrowButton from '@/components/ArrowButton/ArrowButton'
import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import Media from '@/components/Media/Media'
import { projects } from '@/data/projects'
import styles from './ExploreWork.module.scss'

// Card frame size in the design; overlay positions are stored in these units.
const CARD_WIDTH = 396
const CARD_HEIGHT = 276

const toPercent = (value, total) => `${(value / total) * 100}%`

// "Explore our work" row used on the About and Services pages.
// `items` is a list of { slug, summary }; the card visuals come from the project data.
export default function ExploreWork({ items, className = '' }) {
  return (
    <section className={`${styles.explore} ${className}`.trim()}>
      <Container>
        <h2 className={styles.title}>Explore our work</h2>
        <ul className={styles.grid}>
          {items.map(({ slug, summary }) => {
            const project = projects.find((item) => item.slug === slug)
            const { name, background, media, thumbnailOverlay } = project.card

            return (
              <li key={slug}>
                <div className={styles.card} style={{ backgroundColor: background }}>
                  <Media media={media} className={styles.media} />
                  {thumbnailOverlay && (
                    <img
                      className={styles.overlay}
                      src={thumbnailOverlay.src}
                      alt=""
                      style={{
                        left: toPercent(thumbnailOverlay.left, CARD_WIDTH),
                        top: toPercent(thumbnailOverlay.top, CARD_HEIGHT),
                        width: toPercent(thumbnailOverlay.width, CARD_WIDTH),
                      }}
                    />
                  )}
                </div>
                <p className={styles.caption}>
                  <span className={styles.name}>{summary.name ?? name}</span> — {summary.text}
                </p>
              </li>
            )
          })}
        </ul>
        <div className={styles.action}>
          <ArrowButton to="/work">Explore more projects</ArrowButton>
        </div>
        <Divider />
      </Container>
    </section>
  )
}
