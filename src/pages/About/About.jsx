import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import ExploreWork from '@/components/ExploreWork/ExploreWork'
import InfoList from '@/components/InfoList/InfoList'
import PageTitle from '@/components/PageTitle/PageTitle'
import collaborationLogos from '@/assets/images/collaboration-logos.svg'
import portrait from '@/assets/images/about-portrait.jpg'
import { beliefs, collaborations, exploreItems, intro, values } from '@/data/about'
import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <section className={styles.intro}>
        <Container className={styles.introInner}>
          <div className={styles.introText}>
            <PageTitle className={styles.introTitle}>Our Brand</PageTitle>
            <p className={styles.introCopy}>{intro}</p>
          </div>
          <img className={styles.portrait} src={portrait} alt="BBA founder portrait" width="620" height="443" />
        </Container>
      </section>

      <section className={styles.believe}>
        <Container>
          <div className={styles.believeGrid}>
            <h2 className={styles.sectionTitle}>Believe</h2>
            <div>
              <InfoList items={beliefs} />
              <h3 className={styles.valuesTitle}>Values</h3>
              <ul className={styles.values}>
                {values.map((item) => (
                  <li key={item.title}>
                    <h4 className={styles.valueTitle}>{item.title}</h4>
                    <p className={styles.valueText}>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Divider />
        </Container>
      </section>

      <section className={styles.collaborations}>
        <Container className={styles.collaborationsInner}>
          <div className={styles.collaborationsText}>
            <h2 className={`${styles.sectionTitle} ${styles.light}`}>Recent collaborations</h2>
            <div className={styles.collaborationsCopy}>
              {collaborations.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <img
            className={styles.logos}
            src={collaborationLogos}
            alt="Logos of brands BBA has worked with"
            width="497"
            height="511"
          />
        </Container>
      </section>

      <ExploreWork items={exploreItems} />
    </>
  )
}
