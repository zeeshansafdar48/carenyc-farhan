import Divider from '@/components/Divider/Divider'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './ProjectShowcase.module.scss'

// One project row: divider, project copy on the left, media card on the right.
// Shared by the Home and Work pages.
export default function ProjectShowcase({ project }) {
  const { title, subtitle, description, services, card } = project

  return (
    <article className={styles.showcase}>
      <Divider />
      <div className={styles.row}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.details}>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <p className={styles.services}>{services}</p>
        </div>
        <ProjectCard card={card} className={styles.card} />
      </div>
    </article>
  )
}
