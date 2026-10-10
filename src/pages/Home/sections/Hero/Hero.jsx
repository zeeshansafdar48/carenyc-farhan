import Container from '@/components/Container/Container'
import deskLamp from '@/assets/images/desk-lamp.png'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>
          <span className={styles.line}>Business Runs</span>{' '}
          <span className={styles.line}>
            on Performance{' '}
            <span className={styles.lampWord}>
              Branding
              <img className={styles.lamp} src={deskLamp} alt="" width="77" height="106" />
            </span>
          </span>
        </h1>
        <p className={styles.intro}>
          We distill identity systems down to what matters. The right ideas, simply expressed, travel further and
          last.
        </p>
      </Container>
    </section>
  )
}
