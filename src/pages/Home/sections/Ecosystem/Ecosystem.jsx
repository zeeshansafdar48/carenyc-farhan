import ArrowButton from '@/components/ArrowButton/ArrowButton'
import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import styles from './Ecosystem.module.scss'

export default function Ecosystem() {
  return (
    <section className={styles.ecosystem}>
      <Container>
        <h2 className={styles.title}>A Unified Ecosystem</h2>
        <div className={styles.action}>
          <ArrowButton to="/work">Explore more projects</ArrowButton>
        </div>
        <Divider />
      </Container>
    </section>
  )
}
