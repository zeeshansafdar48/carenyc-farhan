import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import ExploreWork from '@/components/ExploreWork/ExploreWork'
import InfoList from '@/components/InfoList/InfoList'
import PageTitle from '@/components/PageTitle/PageTitle'
import { exploreItems, foundations, practiceIntro, serviceGroups } from '@/data/services'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <>
      <section className={styles.practice}>
        <Container>
          <div className={styles.twoColumn}>
            <PageTitle>The practice</PageTitle>
            <p className={styles.practiceIntro}>{practiceIntro}</p>
          </div>
          <Divider />
        </Container>
      </section>

      <section className={styles.foundations}>
        <Container>
          <div className={styles.twoColumn}>
            <h2 className={styles.sectionTitle}>Foundations</h2>
            <InfoList items={foundations} className={styles.foundationList} />
          </div>
          <Divider />
        </Container>
      </section>

      <section className={styles.services}>
        <Container className={styles.servicesInner}>
          <h2 className={`${styles.sectionTitle} ${styles.light}`}>Services</h2>
          <div className={styles.groups}>
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.groupList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ExploreWork items={exploreItems} />
    </>
  )
}
