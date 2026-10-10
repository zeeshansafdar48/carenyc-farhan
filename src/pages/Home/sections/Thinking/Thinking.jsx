import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import PillButton from '@/components/PillButton/PillButton'
import styles from './Thinking.module.scss'

export default function Thinking() {
  return (
    <section className={styles.thinking}>
      <Container>
        <Divider />
        <div className={styles.row}>
          <h2 className={styles.title}>Thinking</h2>
          <div className={styles.body}>
            <p className={styles.text}>
              From early-stage ventures to established companies, we design visual systems for growth. We give
              growing businesses the strategic clarity and digital infrastructure needed to capture short-term
              engagement and maximize long-term valuation
            </p>
            <PillButton to="/about" className={styles.button}>
              Learn more about us
            </PillButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
