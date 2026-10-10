import Container from '@/components/Container/Container'
import PillButton from '@/components/PillButton/PillButton'
import { disciplines } from '@/data/projects'
import styles from './Disciplines.module.scss'

export default function Disciplines() {
  return (
    <section className={styles.disciplines}>
      <Container className={styles.grid}>
        <div className={styles.labels}>
          <p className={styles.brand}>BBA</p>
          <h2 className={styles.title}>Disciplines</h2>
        </div>
        <div>
          <ul className={styles.list}>
            {disciplines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <PillButton to="/services" variant="light" className={styles.button}>
            More
          </PillButton>
        </div>
      </Container>
    </section>
  )
}
